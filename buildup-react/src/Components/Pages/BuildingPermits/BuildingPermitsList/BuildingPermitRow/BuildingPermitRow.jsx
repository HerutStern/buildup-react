import { Box, Button, Collapse, IconButton, Stack, Table, TableCell, TableRow, Tooltip, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SectionsFiles from "./SectionsFiles/SectionsFiles";
import { UserContext } from "../../../../../Context/UserContext";
import { BUILDING_PERMIT_URL } from "../../../../../infra/urls";
import axios from "axios";
import { BuildingPermitListContext } from "../../../../../Context/BuildingPermitListContext";
import './BuildingPermitRow.css'

const BuildingPermitRow = ({row, fetchData}) => {

  // Building permit list context - 
  const rows = useContext(BuildingPermitListContext)

  // Open row content state - 
  const [open, setOpen] = useState(false);

  // User context and company manager state - 
  const [companyManager, setCompanyManager] = useState(false);
  const user = useContext(UserContext);

  // Company manager check - 
  useEffect(() => {
    if (user?.user?.profile?.role === 'COMPANY_MANAGER') {
      console.log(user.user.profile.role);
      setCompanyManager(true);
    }
  }, [user.user]);

  // Approve handler (PATCH) - 
  const handleApprove = async (event) => {
    try{
      event.preventDefault();
      const response = await axios.patch(
        `${BUILDING_PERMIT_URL}/${row.id}/`, 
        {status: 'APPROVED'}
      )
      console.log(response)

      // Updating list - 
      fetchData(rows.url)
    }
    catch(error){
      console.log(error)
    }
  }

  // Reject handler (PATCH) - 
  const handleReject = async (event) => {
    try{
      event.preventDefault();
      const response = await axios.patch(
        `${BUILDING_PERMIT_URL}/${row.id}/`, 
        {status: 'REJECTED'}
      )
      console.log(response)

      // Updating list - 
      fetchData(rows.url)
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <React.Fragment>
      <TableRow >
        {/* Open row details button */}
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        {/* Id column */}
        <TableCell variant='caption'>
          {row.id}
        </TableCell>

        {/* Name column */}
        <TableCell>
          <Typography 
            variant='caption' 
            align='left' 
            className="bold-column"
          >
            {row.name}
          </Typography>
        </TableCell>

        {/* Project manager column */}
        <TableCell align='right' variant='caption'>
          {row.user}
        </TableCell>

        {/* Creation date column */}
        <TableCell align='right' variant='caption'>
          {row.creation_date}
        </TableCell>

        {/* Response date column */}
        <TableCell align='right' variant='caption'>
          {row.approval_date}
        </TableCell>

        {/* Status column */}
        <TableCell align="right">
          <Typography 
            variant='caption' 
            className="bold-column"
            style={{
              color: // The color is based on the building permit status  
                row.status === 'APPROVED' ? 'green' : 
                row.status === 'REJECTED' ? 'red' : 'black'
            }}
          >
          {row.status}
          </Typography>
        </TableCell>

        {/* Response buttons (approve / reject) */}
        {
          companyManager === false 
          ? 
          <></> // Only company manager can approve or reject building permits
          :
          <TableCell  align="right">
            {
              row.status === 'PENDING' // Only on pending a response is needed
              ? 
              <Stack direction={'row'}>

                {/* Approve button */}
                <Tooltip title="APPROVE THE BUILDING PERMIT">
                  <Button 
                    onClick={handleApprove} 
                    size='small' 
                    disabled={false} 
                    color="success"
                  >
                    APPROVE
                  </Button>
                </Tooltip>

                {/* Reject button */}
                <Tooltip title="REJECT THE BUILDING PERMIT">
                  <Button 
                    onClick={handleReject} 
                    size='small' 
                    disabled={false} 
                    color="error"
                  >
                    REJECT
                  </Button> 
                </Tooltip>
              </Stack> 
              : 
              row.status === 'APPROVED' ? <></> :
              row.status === 'REJECTED' ? <></> : <></>
            }
          </TableCell>
        }
      </TableRow>

      {/* Row details (sections and files) */}
      <TableRow >
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={10}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                {/* Sections and files component */}
                <SectionsFiles sections={row.sections} files={row.files}/>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
  
}

export default BuildingPermitRow