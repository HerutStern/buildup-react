import { Button, Stack, TextField, Tooltip, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const TemplateFiles = () => {

  const files = [{
    id: 'id 1',
    name: 'file 1'
  },{
    id: 'id 2',
    name: 'file 2'
  },{
    id: 'id 3',
    name: 'file 3 bla bla bla bla'
  }
]

  return(
    <Stack direction={'column'} alignItems={'flex-start'} spacing={'10%'}>
        <Stack width={'100%'} direction={'column'} alignItems={'center'} spacing={'10%'}>
          <Typography color={'primary'}>
            FILES
          </Typography>
          {files.map((file) => (
            <Stack direction={'row'}>
        <Tooltip title="REMOVE">
          <Button>
          <RemoveIcon color="primary"/>
        </Button>
        </Tooltip>
        
            <TextField defaultValue={file.name}
        // label={file.name} 
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

        <Tooltip title="ADD A FILE">
        <Button>
          <Stack direction={'row'} spacing={'2%'}>
            <AddIcon color="primary"/>
          </Stack>
          
        </Button>
        </Tooltip>
    
      
    </Stack>
  )
}

export default TemplateFiles