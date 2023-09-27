import { Box, Stack } from "@mui/material"
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react";
import dayjs from 'dayjs';
import { useContext } from "react";
import { SetFilterBuildingPermitContext } from "../../../../Context/FilterBuildingPermitContext";


const Search = ({loadingMode, setLoadingMode}) => {
  
  // Search states - 
  const [id, setId] = useState('')
  const [buildingPermitName, setBuildingPermitName] = useState('')
  const [status, setStatus] = useState('');
  const [projectManager, setProjectManager] = useState('')
  const [creationDate, setCreationDate] = useState();
  const [approvalDate, setApprovalDate] = useState();
  
  // Filter context - 
  const setFilterBuildingPermit = useContext(SetFilterBuildingPermitContext)

  // Search handler - 
  const handleSearch = (event) => {
    event.preventDefault();
    // Loader on - 
    setLoadingMode(true)
    // Set filter context - 
    setFilterBuildingPermit({
      params:{
        id: id,
        building_permit_name: buildingPermitName,
        status: status,
        project_manager: projectManager,
        creation_date: creationDate,
        approval_date: approvalDate
      }
    })
    // Loader off - 
    setLoadingMode(false)
  }

  return(
    <Stack 
      direction={"column"} 
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box sx={{"border-radius": "0px", alignItems: 'center'}}/>
      <Stack direction={"column"} spacing={"1em"}>
        <Stack 
          direction={{lg: "row",md: "row", xs: "column"}} 
          spacing={"1em"}
        >
          {/* Id input */}
          <TextField 
            onChange={(event) => setId(event.target.value)} 
            value={id}
            id="outlined-basic" 
            label="ID" 
            variant="outlined" 
            size='small'
            sx={{'& .MuiOutlinedInput-root': {borderRadius: '0px'}}}
          />

          {/* Name input */}
          <TextField 
            size='small' 
            value={buildingPermitName}
            onChange={(event) => setBuildingPermitName(event.target.value)}
            sx={{width: "100%", '& .MuiOutlinedInput-root': {borderRadius: '0px'}}}
            id="outlined-basic" 
            label="BUILDING PERMIT NAME" 
            variant="outlined" 
          />
        </Stack>
        <Stack 
          direction={{lg: "row",md: "column", xs: "column"}} 
          spacing={"1em"}
        >
          {/* Status input */}
          <FormControl 
            size='small' 
            sx={{width: '100%', '& .MuiOutlinedInput-root': {borderRadius: '0px'}}}
          >
            <InputLabel 
              id="demo-simple-select-autowidth-label" 
              sx={{'& .MuiOutlinedInput-root': {borderRadius: '0px'}}}
            >
              STATUS
            </InputLabel>

            {/* Status options */}
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={status}
              onChange={(event) => setStatus(event.target.value)}
              autoWidth
              label="STATUS"
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value={'PENDING'}>PENDING</MenuItem>
              <MenuItem value={'APPROVED'}>APPROVED</MenuItem>
              <MenuItem value={'REJECTED'}>REJECTED</MenuItem>
            </Select>
          </FormControl >

          {/* Project manager input */}
          <TextField 
            size='small' 
            value={projectManager} 
            onChange={(event) => setProjectManager(event.target.value)}
            sx={{width: '100%', '& .MuiOutlinedInput-root': {borderRadius: '0px'}}}
            id="outlined-basic" 
            label="PROJECT MANAGER" 
            variant="outlined" 
          />
        </Stack>

        {/* Date inputs */}
        <Stack 
          direction={{lg: "row", md: "column", xs: "column"}} 
          spacing={"1em"}
        >
          <LocalizationProvider  dateAdapter={AdapterDayjs}>
            <DemoContainer  components={['DatePicker', 'DatePicker']}>

              {/* Creation date input */}
              <DatePicker 
                slotProps={{ textField: { size: 'small' } }}
                sx={{'& .MuiOutlinedInput-root': {borderRadius: '0px'}}}
                label="CREATION DATE"
                value={creationDate}
                onChange={(newVlue) => { 
                  if(newVlue){
                    setCreationDate(dayjs(newVlue).format('YYYY-MM-DD'))
                  }
                  else{
                    setCreationDate('')
                  }
                }}
              />

              {/* Approval date input */}
              <DatePicker 
                slotProps={{ textField: { size: 'small' } }}
                sx={{'& .MuiOutlinedInput-root': {borderRadius: '0px'}}}
                label="APPROVAL DATE" 
                value={approvalDate}
                onChange={(newVlue) => {
                  if(newVlue){
                    setApprovalDate(dayjs(newVlue).format('YYYY-MM-DD'))
                  }
                  else{
                    setApprovalDate('')
                  }
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Stack>
        
        {/* Search button */}
        <Box sx={{backgroundColor: 'primary.main', width: "auto"}}>
          <Button 
            disabled={loadingMode} 
            color='info' 
            size="lg" 
            type="submit" 
            onClick={handleSearch}
            fullWidth
          >
            SEARCH
          </Button>
        </Box>
      </Stack>
    </Stack>
  )
}

export default Search