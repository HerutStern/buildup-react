import { Stack, TextField } from "@mui/material"

const Sections = () => {

    const sections = [{
      id: 'id 1',
      name: 'section 1'
    },{
      id: 'id 2',
      name: 'section 2'
    }
  ]



  return(
    <>
    <Stack direction={'column'} spacing={'10%'} >
      {
      sections.map((section) => (
        <>
       
          <TextField 
          label={section.name}
          color="primary" 
          variant="standard" 
          size='small'
          sx={{
            '& .MuiOutlinedInput-root': {borderRadius: '0px'}
          }}
           /> 
        
        </>
         
      ))}
    </Stack>
      
          
    </>
  )
}

export default Sections