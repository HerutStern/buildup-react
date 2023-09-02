import { Box, Stack } from "@mui/material"
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react";

const Search = () => {

  const [creationDate, setCreationDate] = useState();
  const [approvalDate, setApprovalDate] = useState();
  const [status, setStatus] = useState('');
  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return(
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
          id="outlined-basic" label="ID" variant="outlined" size='small'
          sx={{'& .MuiOutlinedInput-root': {borderRadius: '0px'}
          }} />
          <TextField size='small'
          sx={{width: "100%", '& .MuiOutlinedInput-root': {borderRadius: '0px'}}}
           id="outlined-basic" label="BUILDING PERMIT NAME ..." variant="outlined" />
        </Stack>
        <Stack direction={{lg: "row",md: "column", xs: "column"}} spacing={"1em"}>
            <FormControl size='small' 
            sx={{width: '100%', '& .MuiOutlinedInput-root': {borderRadius: '0px'}
          }}>
              <InputLabel id="demo-simple-select-autowidth-label" 
              sx={{'& .MuiOutlinedInput-root': {borderRadius: '0px'}}}
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
            </FormControl >
            <TextField size='small'
            sx={{width: '100%', '& .MuiOutlinedInput-root': {borderRadius: '0px'}}}
            id="outlined-basic" label="PROJECT MANAGER ..." variant="outlined" />

          </Stack>
          <Stack direction={{lg: "row", md: "column", xs: "column"}} spacing={"1em"}>
           <LocalizationProvider  dateAdapter={AdapterDayjs}>
              <DemoContainer  components={['DatePicker', 'DatePicker']}>
                <DatePicker slotProps={{ textField: { size: 'small' } }}
                sx={{'& .MuiOutlinedInput-root': {borderRadius: '0px'}}}
                  label="CREATION DATE"
                  value={creationDate}
                  onChange={(newValue) => setCreationDate(newValue)}
                />
                <DatePicker slotProps={{ textField: { size: 'small' } }}
                sx={{'& .MuiOutlinedInput-root': {borderRadius: '0px'}}}
                  label="APPROVAL DATE"
                  value={approvalDate}
                  onChange={(newValue) => setApprovalDate(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>

          </Stack>
          
          
          <Box sx={{backgroundColor: 'primary.main',width: "auto"}}>
            <Button color='info' size="lg" type="submit"
                fullWidth>
              SEARCH
              </Button>
          </Box>

          </Stack>
        </Stack>
  )
}

export default Search