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
import { FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import { Button, Input, Option, Typography } from '@mui/joy';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SectionsFiles from './SectionsFiles/SectionsFiles';

// open pmit files: <a href="file://///SERVER/directory/file.ext">file.ext</a>



function createData(id, name, project_manager, creation_date, 
  status, approval_date, is_deleted,  company) {
  return {
    id,
    name,
    status,
    creation_date,
    approval_date,
    project_manager
  };
}


function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow style={{height: '5em'}} sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>
          {row.id}
        </TableCell>
        <TableCell>
          <Typography align='left' style={{'text-transform': 'uppercase'}} level="h6">{row.name}
            </Typography>
          </TableCell>
          <TableCell align='right'>
          {row.project_manager}
        </TableCell>
        <TableCell align='right'>
          {row.creation_date}
        </TableCell>
          <TableCell align='right'>
          {row.approval_date}
        </TableCell>
        <TableCell 
         align="right">
          <Typography level="h6"
          style={{color: row.status === 'APPROVED' ? 'green' : 
          row.status === 'REJECTED' ? 'red' : 'black'}}>
          {row.status}
         </Typography>
          
         </TableCell>
         <TableCell  align="right">
            {
              row.status === 'PENDING' ? 
              <>
                <Button disabled={false} variant="plain" color="success">
                  APPROVE
                </Button>
                <Button disabled={false} variant="plain" color="danger">
                  REJECT
                </Button>
              </> : 
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
const rows = [
  createData(1, 'name1', 1, '12-8-2001', 'APPROVED', '12-8-2001', 2),
  createData(2, 'name2', 1, '12-8-2001', 'APPROVED', '12-8-2001', 3),
  createData(3, 'name3', 1, '12-8-2001', 'PENDING', null, 5),
  createData(4, 'name3', 1, '12-8-2001', 'PENDING', null, 3),
  createData(5, 'name4', 1, '12-8-2001', 'REJECTED', null, 11),
];


const BuildingPermits = () => {

  const [creationDate, setCreationDate] = React.useState();
  const [approvalDate, setApprovalDate] = React.useState();
  const [status, setStatus] = React.useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return(
    <>
      <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} >
        <Typography level="display2" variant="plain" style={{'text-align': 'center'}} >
          BUILDING PERMITS
        </Typography>
        <Stack direction={"column"} spacing={"1em"} justifyContent={"center"}
         alignItems={"center"}>
          <Box style={{"border-radius": "0px"}} 
          sx={{
            alignItems: 'center',
        }}
        />
        <Stack direction={"column"} spacing={"1em"}>
        <Stack direction={{lg: "row",md: "row", xs: "column"}} spacing={"1em"}>
          <TextField
          id="outlined-basic" label="ID" variant="outlined"
          sx={{'& .MuiInputLabel-root': {color: 'black !important'},
            '& .MuiOutlinedInput-notchedOutline': {borderColor: 'black !important'},
            '& .MuiOutlinedInput-root': {borderRadius: '0px'}
          }} />
          <TextField
          sx={{width: "100%", '& .MuiInputLabel-root': {color: 'black !important'},
          '& .MuiOutlinedInput-notchedOutline': {borderColor: 'black !important'},
          '& .MuiOutlinedInput-root': {borderRadius: '0px'}}}
           id="outlined-basic" label="BUILDING PERMIT NAME ..." variant="outlined" />
        </Stack>
        <Stack direction={{lg: "row",md: "column", xs: "column"}} spacing={"1em"}>
            <FormControl
            sx={{width: '100%','& .MuiInputLabel-root': {color: 'black !important'},
            '& .MuiOutlinedInput-notchedOutline': {borderColor: 'black !important'},
            '& .MuiOutlinedInput-root': {borderRadius: '0px'}
          }}>
              <InputLabel id="demo-simple-select-autowidth-label" 
              sx={{'& .MuiInputLabel-root': {color: 'black !important'},
              '& .MuiOutlinedInput-notchedOutline': {borderColor: 'black !important'},
              '& .MuiOutlinedInput-root': {borderRadius: '0px'}}}
              >STATUS</InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={status}
                onChange={handleChange}
                autoWidth
                label="STATUS"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'PENDING'}>PENDING</MenuItem>
                <MenuItem value={'APPROVED'}>APPROVED</MenuItem>
                <MenuItem value={'REJECTED'}>REJECTED</MenuItem>
              </Select>
            </FormControl>
            <TextField 
            sx={{width: '100%', '& .MuiInputLabel-root': {color: 'black !important'},
            '& .MuiOutlinedInput-notchedOutline': {borderColor: 'black !important'},
            '& .MuiOutlinedInput-root': {borderRadius: '0px'}}}
            id="outlined-basic" label="PROJECT MANAGER ..." variant="outlined" />

          </Stack>
          <Stack direction={{lg: "row", md: "column", xs: "column"}} spacing={"1em"}>
           <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker', 'DatePicker']}>
                <DatePicker 
                sx={{'& .MuiInputLabel-root': {color: 'black !important'},
                '& .MuiOutlinedInput-notchedOutline': {borderColor: 'black !important'},
                '& .MuiOutlinedInput-root': {borderRadius: '0px'},
                '& .Mui-selected': {backgroundColor: 'black !important'}}}
                  label="CREATION DATE"
                  value={creationDate}
                  onChange={(newValue) => setCreationDate(newValue)}
                />
                <DatePicker
                sx={{'& .MuiInputLabel-root': {color: 'black !important'},
                '& .MuiOutlinedInput-notchedOutline': {borderColor: 'black !important'},
                '& .MuiOutlinedInput-root': {borderRadius: '0px'}}}
                  label="APPROVAL DATE"
                  value={approvalDate}
                  onChange={(newValue) => setApprovalDate(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>

          </Stack>
          
          
          
          <Button size="lg" variant="plain"  color="neutral"
            sx={{'border-radius': 0 ,backgroundColor: "black" ,height: "4em", color: "white"}}>
              SEARCH
              </Button>
          </Stack>
          
          
          
        </Stack>
          {/* <TextField id="standard-basic" label="Search…" variant="standard"></TextField> */}

          
            
        </Stack>
        
      <br/><br/><br/>
      <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell style={{width: '5em'}} align='left' />
            <TableCell align='left'>ID</TableCell>
            <TableCell align='left' style={{width: '30em'}} >NAME</TableCell>
            <TableCell align='right'>PROJECT MANAGER</TableCell>
            <TableCell align="right">CREATION DATE</TableCell>
            <TableCell align="right">APPROVAL DATE</TableCell>
            <TableCell align="right">STATUS</TableCell>
            <TableCell align='right'></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </>
  )
}

export default BuildingPermits