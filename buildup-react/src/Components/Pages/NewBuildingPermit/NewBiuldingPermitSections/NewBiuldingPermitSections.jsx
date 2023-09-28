import { Stack, TextField } from "@mui/material"

const Sections = ({sections, setBuildingPermitSections}) => {

  // New section handler - 
  const handleSectionContent = (event, section_template) => {
    const content = event.target.value
    setBuildingPermitSections((prevState) => ({
      ...prevState,
      [section_template]: content,
    }));
  }

  return(
    <Stack width={{lg:'20%', md: '25%'}} direction={'column'} spacing={'10%'} >
      {
        // Sections list
        sections.map((section) => (   
          // Section input -   
          <TextField 
            onChange={(event) => handleSectionContent(event, section.id)}
            required
            label={section.name}
            color="primary" 
            variant="outlined" 
            size='small'
            sx={{
              '& .MuiOutlinedInput-root': {borderRadius: '0px'}
            }}
          /> 
        ))
      }
    </Stack>
  )
}

export default Sections