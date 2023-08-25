import { Typography } from "@mui/joy"
import { Stack } from "@mui/material"

const Template = () => {
  return(
    <>
      <Stack direction={{lg: "row",md: "row", xs: "column"}} justifyContent={"space-evenly"}>
        <Typography sx={{paddingRight: "3em"}} level="display2" variant="plain" >
          BUILDING PERMIT REQUIREMENTS
        </Typography>
        <div style={{width: "100%" ,backgroundColor: "black"}}>
          <p style={{color: "white",padding: "2em"}}>SECTIONS:</p>
          <p style={{color: "white",padding: "2em"}}>FILES:</p>
        </div>
        
      </Stack>
    </>
  )
}

export default Template