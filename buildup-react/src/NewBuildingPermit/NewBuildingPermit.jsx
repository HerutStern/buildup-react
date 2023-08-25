import { Opacity } from '@mui/icons-material';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import { Stack } from '@mui/material';

//  flexWrap={{xs: 'wrap', lg: 'nowrap'}}
// width={{xs: '100%', lg:'50%'}}

const NewBuildingPermit = () => {
  return(
    <>
      <Stack direction={{lg: "row",md: "row", xs: "column"}} justifyContent={"space-evenly"} >
        <Typography level="display2" variant="plain" >
          SEND A NEW BUILDING PERMIT
        </Typography>
        <div style={{width: "100%" ,backgroundColor: "black"}} >
          <p style={{color: "white",padding: "2em"}}>SECTIONS:</p>
          <p style={{color: "white",padding: "2em"}}>FILES:</p>
        </div>
      </Stack>
    </>
  )
}

export default NewBuildingPermit