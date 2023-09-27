import { Button, Stack, TextField, Tooltip, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const TemplateSections = ({sections}) => {



  return(
    <Stack direction={'column'} alignItems={'flex-start'} spacing={'10%'}>
    <Stack width={'100%'} direction={'column'} alignItems={'center'} spacing={'10%'} >
    <Typography color={'primary'}>
            SECTIONS
          </Typography>
      {
      sections.map((section) => (
        <Stack direction={'row'}>
        <Tooltip title="REMOVE">
          <Button>
            <RemoveIcon color="primary"/>
          </Button>
        </Tooltip>
          
          <TextField defaultValue={section.name}
          // label={section.name} 
          color="primary" 
          variant="outlined" 
          size='small'
          sx={{ 
          //   '& .MuiInputBase-root': {color: 'white !important'},
          // '& .MuiInputLabel-root': {color: 'white !important'},
          // '& .MuiOutlinedInput-notchedOutline': {borderColor: 'white !important'},
            '& .MuiOutlinedInput-root': {borderRadius: '0px'}, 
          }}
           /> 
           
        
        </Stack>
         
      ))}
    
    </Stack>
    <Tooltip title="ADD A SECTION">
      <Button>
      <AddIcon color="primary"/>
    </Button>
    </Tooltip>
    
      
          
    </Stack>
  )
}

export default TemplateSections