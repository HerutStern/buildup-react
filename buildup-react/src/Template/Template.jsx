import { Typography } from "@mui/joy"
import { Stack } from "@mui/material"

const Template = () => {
  return(
    <>
      <Stack direction={"row"} justifyContent={"space-evenly"}>
        <Typography sx={{paddingRight: "3em"}} level="display2" variant="plain" >
          BUILDING PERMIT TEMPLATE
        </Typography>
        <div style={{width: "90em" ,backgroundColor: "black"}}>
          <p style={{color: "white",padding: "2em"}}>SECTIONS:</p>
          <p style={{color: "white",padding: "2em"}}>FILES:</p>
        </div>
        
      </Stack>
    </>
  )
}

export default Template