import { Box, Button, Stack, Typography } from "@mui/material";
import TemplateSections from "./TemplateSections/TemplateSections";
import TemplateFiles from "./TemplateFiles/TemplateFiles";

const Template = () => {
  return(
    <>
      <Stack direction={"column"} spacing={{lg: '5%', xs: '20%'}}
      alignItems={"center"}>
        <Typography width={'100%'} color={'primary'} variant="h4" 
        sx={{'text-align': 'center' ,'fontWeight': 800}}>
          BUILDING PERMIT TEMPLATE
        </Typography>
          <Stack alignItems={'center'}  direction={'column'} spacing={'10%'}>
            <Stack direction={{lg: 'row', md: 'row', xs: 'column'}} spacing={'10%'}>
            <TemplateSections></TemplateSections>
            <TemplateFiles></TemplateFiles>
            </Stack>
            
            <Button 
            type="submit"
            fullWidth
            size="lg"
            variant='contained'
            color="primary"
            sx={{width: '60%' ,borderRadius: '0px'}}
          >
            SAVE
          </Button>
          </Stack>
        </Stack>
    </>
  )
}

export default Template