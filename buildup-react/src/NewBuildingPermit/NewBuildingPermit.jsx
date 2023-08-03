import { Opacity } from '@mui/icons-material';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import { Stack } from '@mui/material';


const NewBuildingPermit = () => {
  return(
    <>
      <Stack direction={"row"} justifyContent={"space-evenly"}>
        <Typography sx={{paddingRight: "3em"}} level="display2" variant="plain" >
          SEND A NEW BUILDING PERMIT
        </Typography>
        <div style={{width: "90em" ,backgroundColor: "black"}}>
          <p style={{color: "white",padding: "2em"}}>FORM</p>
        </div>
        
      </Stack>
    </>
  )
}

export default NewBuildingPermit