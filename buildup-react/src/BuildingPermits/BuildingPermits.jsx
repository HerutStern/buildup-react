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

// open pmit files: <a href="file://///SERVER/directory/file.ext">file.ext</a>



function createData(id, name, creation_date, status, approval_date, is_deleted,  company, user) {
  return {
    id,
    name,
    status,
    DETAILS: [
      {
        'CREATION DATE': creation_date,
        'APPROVAL DATE': approval_date,
        'PROJECT MANAGER': user,
      }
    ],
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
          <Typography style={{'text-transform': 'uppercase'}} level="h5">{row.name}
            </Typography>
          </TableCell>
        <TableCell 
        style={{color: row.status === 'APPROVED' ? 'green' : 
        row.status === 'REJECTED' ? 'red' : 'black'}}
         align="right">{row.status}</TableCell>
      </TableRow>
      <TableRow >
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow style={{height: '5em'}}>
                    <TableCell align='center'>PROJECT MANAGER</TableCell>
                    <TableCell align="center">CREATION DATE</TableCell>
                    <TableCell align="center">APPROVAL DATE</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.DETAILS.map((detailRow) => (
                    <TableRow style={{height: '5em'}} key={detailRow['PROJECT MANAGER']}>
                      <TableCell align='center'>
                        {detailRow['PROJECT MANAGER']}
                      </TableCell>
                      <TableCell align='center'>{detailRow['CREATION DATE']}</TableCell>
                      <TableCell align='center'>
                        {detailRow['APPROVAL DATE'] === null ? '-' : detailRow['APPROVAL DATE']}
                      </TableCell>
                      <TableCell style={{width: '16em'}} align="left">
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
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };


// (id, name, creation_date, status, approval_date, is_deleted, company, user)
const rows = [
  createData(1, 'name1', '12-8-2001', 'APPROVED', '12-8-2001', true, 1, 2),
  createData(2, 'name2', '12-8-2001', 'APPROVED', '12-8-2001', false, 1, 3),
  createData(3, 'name3', '12-8-2001', 'PENDING', null, false, 1, 5),
  createData(4, 'name3', '12-8-2001', 'PENDING', null, false, 2, 3),
  createData(5, 'name4', '12-8-2001', 'REJECTED', null, false, 2, 11),
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
      <Stack direction={"column"} alignItems={"center"} >
        <Typography level="display2" variant="plain" >
          BUILDING PERMITS
        </Typography>
        <Stack direction={"column"} spacing={"1em"} alignItems={"center"}>
          <Box style={{"border-radius": "0px"}}
          sx={{
            width: "25em",
            py: 2,
            display: 'grid',
            gap: 2,
            alignItems: 'center',
            flexWrap: 'wrap',
        }}
        />
        <Stack direction={"column"} spacing={"1em"}>
        <Stack direction={"row"} spacing={"1em"}>
          <TextField sx={{ width: "6em" }}
          id="outlined-basic" label="ID" variant="outlined" />
          <TextField sx={{ width: "26em" }}
           id="outlined-basic" label="BUILDING PERMIT NAME ..." variant="outlined" />
        </Stack>
        <Stack justifyContent={'space-between'} direction={"row"} spacing={"1em"}>
            <FormControl sx={{ width: "16em" }}>
              <InputLabel id="demo-simple-select-autowidth-label">STATUS</InputLabel>
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
            <TextField sx={{ width: "16em" }}
            id="outlined-basic" label="PROJECT MANAGER ..." variant="outlined" />

          </Stack>
          <Stack direction={"row"} spacing={"1em"}>
           <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker', 'DatePicker']}>
                <DatePicker
                  label="CREATION DATE"
                  value={creationDate}
                  onChange={(newValue) => setCreationDate(newValue)}
                />
                <DatePicker
                  label="APPROVAL DATE"
                  value={approvalDate}
                  onChange={(newValue) => setApprovalDate(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>

          </Stack>
          
          
          
          <Button size="lg" variant="plain"  color="neutral"
            sx={{'border-radius': 0 ,backgroundColor: "black" ,height: "4em", color: "white"}}>
              SUBMIT
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
            <TableCell >NAME</TableCell>
            <TableCell align="right">STATUS</TableCell>
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