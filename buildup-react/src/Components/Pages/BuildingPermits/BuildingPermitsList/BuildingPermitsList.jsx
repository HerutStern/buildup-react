import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useContext } from "react";
import BuildingPermitRow from "./BuildingPermitRow/BuildingPermitRow";
import { BuildingPermitListContext } from "../../../../Context/BuildingPermitListContext";


const BuildingPermitsList = ({fetchData}) => {

  // Building permit list context - 
  const rows = useContext(BuildingPermitListContext)

  return(
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          {/* Titles */}
          <TableRow>
            <TableCell variant='caption' style={{width: '5%'}} align='left' />
            <TableCell variant='caption' align='left'>ID</TableCell>
            <TableCell variant='caption' align='left' style={{width: '22%'}} >NAME</TableCell>
            <TableCell variant='caption' align='right'>PROJECT MANAGER</TableCell>
            <TableCell variant='caption' align="right">CREATION DATE</TableCell>
            <TableCell variant='caption' align="right">RESPONSE DATE</TableCell>
            <TableCell variant='caption' align="right">STATUS</TableCell>
            <TableCell variant='caption' align='right'></TableCell>
          </TableRow>
        </TableHead>

        {/* Rows */}
        <TableBody variant='caption'>
          { 
          rows === null 
          ? 
          <></> 
          : 
          rows?.rows?.map((row) => (
            // Rows component - 
            <BuildingPermitRow 
              fetchData={fetchData} 
              key={row['id']} 
              row={row} 
            />
          ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BuildingPermitsList