import * as React from 'react';
import PropTypes from 'prop-types';
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
import { Stack, TextField } from '@mui/material';
import { Button, Typography } from '@mui/joy';

// open pmit files: <a href="file://///SERVER/directory/file.ext">file.ext</a>

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
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

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

const BuildingPermits = () => {

  return(
    <>
      <Stack direction={"column"} alignItems={"center"} spacing={"1em"}>
        <Typography level="display1" variant="plain" >
          BUILDING PERMITS
        </Typography>
        <Stack direction={"row"} spacing={"1em"} alignItems={"center"}>
          <Box style={{"border-radius": "0px"}}
          sx={{
            width: "25em",
            py: 2,
            display: 'grid',
            gap: 2,
            alignItems: 'center',
            flexWrap: 'wrap',
        }}
        >

          <TextField id="standard-basic" label="Search…" variant="standard"></TextField>
          
          </Box>
          <Button  size="small" 
            variant="solild" 
            sx={{height: "4em", backgroundColor:"white"}}>
              <Typography sx={{color: "grey"}}>SUBMIT</Typography>
              </Button>
            
        </Stack>
        
      </Stack>
      <br/><br/><br/>
      <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
{/*       
      <Stack paddingLeft={"20em"} paddingRight={"20em"} paddingTop={"6em"} direction="column" spacing={"3em"} justifyContent={"center"} alignItems={"center"}>
      <Table aria-label="basic table" borderAxis="none" stickyHeader size="lg">
      <thead>
        <tr>
          
          <th style={{backgroundColor: "white",color: "black",height:"auoto",width: 'auoto' }}>NAME</th>
          <th style={{backgroundColor: "white",color: "black", height:"auoto",width: '10%' }}>STATUS</th>
          <th style={{backgroundColor: "white",color: "white",height:"auoto",width: '10%' }}>Click</th>

        </tr>
      </thead>
      <tbody>
        <tr>
        <td style={{backgroundColor: "white",color: "black" }}>Building 1 - Tel Aviv</td>
          <td style={{backgroundColor: "white",color: "black" }}>APPROVED</td>
          <td style={{backgroundColor: "white",color: "black"}}>
            <Button>
              <ArrowForwardIosIcon fontSize="large" style={{fill: "black"}}/>
            </Button>
            
          </td>
          
        </tr>
        <tr>
        <td style={{backgroundColor: "white",color: "black" }}>Long name - Building 1111111111 1111 - Tel Aviv 111111 111111111 11111 111111111 111111111</td>
          <td style={{backgroundColor: "white",color: "black"}}>APPROVED</td>
          <td style={{backgroundColor: "white",color: "black"}}>
            <Button>
              <ArrowForwardIosIcon fontSize="large" style={{fill: "black"}}/>
            </Button>
            
          </td>
          
        </tr>
        
      </tbody>
    </Table>
      </Stack>
    </> */}
    </>
  )
}

export default BuildingPermits