import { Stack, TextField } from "@mui/material"
import { useState } from "react"


const NewBuildingPermitName = () => {

const [name, setNmae] = useState()

return(
  <>
  <Stack width={'100%'} direction={'column'} spacing={'10%'} >
      <>
     
        <TextField
        label={'PROJECT NAME'} 
        value={name}
        color="primary" 
        variant="outlined" 
        size='small'
        sx={{
          '& .MuiOutlinedInput-root': {borderRadius: '0px'}, 
        }}
         /> 
      
      </>

  </Stack>
    
        
  </>
)
}

export default NewBuildingPermitName