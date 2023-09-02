import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import NewBiuldingPermitSections from './NewBiuldingPermitSections/NewBiuldingPermitSections';
import NewBiuldingPermitFiles from './NewBiuldingPermitFiles/NewBiuldingPermitFiles';
import NewBuildingPermitName from './NewBuildingPermitName/NewBuildingPermitName';

const NewBuildingPermit = () => {
  return(
    <>
      <Stack direction={"column"} spacing={{lg: '5%', xs: '20%'}}
      alignItems={"center"}>
        <Typography width={'100%'} color={'primary'} variant="h4" 
        sx={{'text-align': {lg: 'center', md: 'center', xs: 'left'} ,'fontWeight': 800}}>
          SEND A NEW BUILDING PERMIT
        </Typography>
          <Stack alignItems={'center'} direction={'column'} spacing={'10%'}>
            <NewBuildingPermitName/>
            <Stack 
             direction={{lg: 'row', md: 'row', xs: 'column'}} spacing={'10%'}>
            <NewBiuldingPermitSections></NewBiuldingPermitSections>
            <NewBiuldingPermitFiles></NewBiuldingPermitFiles>
            </Stack>
            
            <Button 
            type="submit"
            fullWidth
            size="lg"
            variant='contained'
            color="primary"
            sx={{ borderRadius: '0px'}}
          >
            SEND
          </Button>
          </Stack>
        </Stack>
    </>
  )
}

export default NewBuildingPermit