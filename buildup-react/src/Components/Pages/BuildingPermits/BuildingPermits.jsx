import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Backdrop, Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Tooltip, Typography } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SectionsFiles from './SectionsFiles/SectionsFiles';
import { useNavigate } from 'react-router-dom';
import { BUILDING_PERMIT_URL } from '../../../infra/urls';
import axios from 'axios';
import { UserContext } from '../../../Context/UserContext';
import { useContext } from 'react';
import Search from './Search/Search';
import { useState } from 'react';
import { useEffect } from 'react';

// open pmit files: <a href="file://///SERVER/directory/file.ext">file.ext</a>



// function createData(id, name, project_manager, creation_date, 
//   status, approval_date, is_deleted,  company) {
//   return {
//     id,
//     name,
//     status,
//     creation_date,
//     approval_date,
//     project_manager
//   };
// }


function Row(props) {

  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    
    <React.Fragment>
      <TableRow >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell variant='caption'>
          {row.id}
        </TableCell>
        <TableCell>
          <Typography variant='caption' align='left' 
          style={{'text-transform': 'uppercase', fontWeight: 800}} >{row.name}
            </Typography>
          </TableCell>
          <TableCell align='right' variant='caption'>
          {row.user}
        </TableCell>
        <TableCell align='right' variant='caption'>
          {row.creation_date}
        </TableCell>
          <TableCell align='right' variant='caption'>
          {row.approval_date}
        </TableCell>
        <TableCell 
         align="right">
          <Typography variant='caption'
          style={{fontWeight: 800, color: row.status === 'APPROVED' ? 'green' : 
          row.status === 'REJECTED' ? 'red' : 'black'}}>
          {row.status}
         </Typography>
          
         </TableCell>
         <TableCell  align="right">
            {
              row.status === 'PENDING' ? 
              <Stack direction={'row'}>
                <Tooltip title="APPROVE THE BUILDING PERMIT">
                  <Button size='small' disabled={false} color="success">
                      APPROVE
                  </Button>
                </Tooltip>
                <Tooltip title="REJECT THE BUILDING PERMIT">
                  <Button size='small' disabled={false} color="error">
                      REJECT
                  </Button> 
                </Tooltip>
                
              </Stack> : 
              row.status === 'APPROVED' ? <></> :
              row.status === 'REJECTED' ? <></> : <></>
            }
          </TableCell>
      </TableRow>
      <TableRow >
        <TableCell style={{ paddingLeft: '15em', paddingBottom: 0, paddingTop: 0 }} colSpan={10}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                {/* HERE PUT THE SECTIONS AND FILES. */}
                <SectionsFiles/>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


// (id, name, creation_date, status, approval_date, company, user, 
// sections, files)
// const rows = [
//   createData(1, 'namee   e eeee eeeeeeeeeeeeeeeeeee eeee blabalblaaaaaaaaaaa aaaaaaaaa', 1, '12-8-2001', 'APPROVED', '12-8-2001', 2),
//   createData(2, 'name2', 1, '12-8-2001', 'APPROVED', '12-8-2001', 3),
//   createData(3, 'name3', 1, '12-8-2001', 'PENDING', null, 5),
//   createData(4, 'name3', 1, '12-8-2001', 'PENDING', null, 3),
//   createData(5, 'name4', 1, '12-8-2001', 'REJECTED', null, 11),
// ];


const BuildingPermits = () => {
  const [rows, setRows] = useState(null)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const fetchData = async () => {
    const token = localStorage.getItem('token')
      try{
      // event.preventDefault();
    const response = 
      await axios.get(BUILDING_PERMIT_URL)
    setRows(response.data.results)

    }
    catch(error){
      console.log(error)

    }
};
fetchData()
},['']) 




  return(
    <>
    <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress  />
      </Backdrop>
      <Stack direction={"column"} alignItems={"center"} >
        <Typography color='primary' 
        variant="h3" style={{'text-align': 'center', 'fontWeight': 800}} >
          BUILDING PERMITS
        </Typography>
        <Search/>
          {/* <TextField id="standard-basic" label="Search…" variant="standard"></TextField> */}
            
        </Stack>
        
      <br/><br/><br/>
      <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell variant='caption' style={{width: '5%'}} align='left' />
            <TableCell variant='caption' align='left'>ID</TableCell>
            <TableCell variant='caption' align='left' style={{width: '22%'}} >NAME</TableCell>
            <TableCell variant='caption' align='right'>PROJECT MANAGER</TableCell>
            <TableCell variant='caption' align="right">CREATION DATE</TableCell>
            <TableCell variant='caption' align="right">APPROVAL DATE</TableCell>
            <TableCell variant='caption' align="right">STATUS</TableCell>
            <TableCell variant='caption' align='right'></TableCell>
          </TableRow>
        </TableHead>
        <TableBody variant='caption'>
          { rows === null ? <></> : rows.map((row) => (
            <Row key={row['id']} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </>
  )
}

export default BuildingPermits