import { Typography } from "@mui/material"


// &nbsp; => space

const TemplateFilesParagraph = () => {
  return(
    <Typography 
      paragraph={true} 
      align="justify" 
      color="primary" 
      variant="caption"
    >
      ADD ALL THE FILE NAMES 
      THAT A PROJECT MANAGER 
      WILL BE REQUIRED TO ATTACH 
      TO A NEW BUILDING PERMIT
    </Typography>
  )
}

export default TemplateFilesParagraph