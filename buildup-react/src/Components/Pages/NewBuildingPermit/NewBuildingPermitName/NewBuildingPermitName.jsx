import { Stack, TextField } from "@mui/material"


const NewBuildingPermitName = ({name, setNmae}) => {


  return(
    <Stack width={'100%'} direction={'column'} spacing={'10%'} >
      {/* Name input */}
      <TextField
        label={'PROJECT NAME'} 
        value={name}
        color="primary" 
        variant="outlined" 
        size='small'
        sx={{
          '& .MuiOutlinedInput-root': {borderRadius: '0px'}, 
        }}
        onChange={(event)=> setNmae(event.target.value)}
      /> 
    </Stack>
  )
}

export default NewBuildingPermitName