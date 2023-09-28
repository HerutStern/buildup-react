import { Typography } from "@mui/material"


// &nbsp; => space

const TemplateSectionsParagraph = () => {
  return(
    <Typography 
      paragraph={true} 
      align="justify" 
      color="primary" 
      variant="caption"
    >
      ADD ALL THE SECTIONS 
      THAT A PROJECT MANAGER 
      WILL BE REQUIRED TO FILL 
      IN A NEW BUILDING PERMIT
    </Typography>
  )
}

export default TemplateSectionsParagraph