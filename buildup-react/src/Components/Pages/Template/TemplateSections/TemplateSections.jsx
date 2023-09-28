import { Box, Button, LinearProgress, List, Stack, TextField, Tooltip, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import TemplateSectionsParagraph from "../../../Text/TemplateParagraph/TemplateSectionsParagraph/TemplateSectionsParagraph";
import TamplateSectionDetails from "./TemplateSectionDetails/TemplateSectionDetails";
import { useContext, useState } from "react";
import { SECTION_TENPLATE_URL } from "../../../../infra/urls";
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import SaveSharpIcon from '@mui/icons-material/SaveSharp';
import axios from "axios";
import { SetNotificationContext } from "../../../../Context/NotificationContext";


const TemplateSections = ({fetchData, sections}) => {
  
  // Notification cotext - 
  const setNotification = useContext(SetNotificationContext)

  // Editing mode state - 
  const [addingMode, setAddingMode] = useState(false)
  // Loading mode state - 
  const [loadingMode, setLoadingMode] = useState(false)

  // New section state -
  const [sectionName, setSectionName] = useState('')

  // Add new section handler (POST) - 
  const addNewSection = async (event) => {
    try{
      event.preventDefault();
      // Loader on - 
      setLoadingMode(true)

      // POST - 
      const response = await axios.post(
        `${SECTION_TENPLATE_URL}/`,
        {name: sectionName}
      )
      console.log(response)

      // Updating the list of the sections to the page - 
      fetchData()
      // Success notification -
      setNotification(
        {
          open: true, 
          msg: "THE SECTION HAS BEEN ADDED", 
          severity: 'success'
        }
      )
    }
    catch(error){
      // Error notification - 
      setNotification(
        {
          open: true, 
          msg: `PAGE IS UNAVAILABLE`, 
          error: `${error.message}`,
          severity: 'warning'
        }
      )
      console.log(error)
    }
    finally{
      // Loader and adding mode off - 
      setAddingMode(false)
      setLoadingMode(false)
    }
  }


  return(
    <Stack alignItems={'center'} spacing={'5%'} >
      <Stack 
        spacing={'5%'} 
        direction={'column'} 
        alignItems={'center'} 
        width={{lg: '50%',md: '50%', xs: '100%'}}
      >
        {/* Subtitle */}
        <Typography style={{fontWeight: 700}} variant="h6" color={'primary'}>
          SECTIONS
        </Typography>
        <TemplateSectionsParagraph/>
      </Stack>
      <Stack 
        width={{lg:'60%', md: '50%'}} 
        alignItems={'canter'} 
        direction={'column'} 
        spacing={'3%'}
      >
        {/* Sections list */}
        <List sx={{maxWidth: '100%', padding: 0}}>
          {
            sections.map((sectionData) => (
              // Section details component
            <TamplateSectionDetails fetchData={fetchData} sectionData={sectionData}/>
            ))
          }
        </List>
      </Stack>

      {/* Add a section (edit line and display line) */}
      {
        // Edit line (adding mode) - 
        addingMode
        ?
        <Stack direction={'row'} alignItems={'center'}>
          {/* section input - */}
          <TextField 
            disabled={loadingMode} 
            label={'SECTION'} 
            value={sectionName}
            size='small'
            variant="standard" 
            color='primary' 
            onChange={(event) => setSectionName(event.target.value)} 
            sx={{width: '100%', '& .MuiOutlinedInput-root': {borderRadius: '0px ! important'}}}
          />

          {/* Save button - */}
          <Tooltip title="SAVE">
            <Button  disabled={loadingMode} onClick={addNewSection}>
              <SaveSharpIcon color="primary"/>
            </Button>
          </Tooltip>
            
          {/* Close button - */}
          <Tooltip title="CANCEL">
            <Button onClick={() => setAddingMode(false)}>
              <CloseSharpIcon color="primary"/>
            </Button>
          </Tooltip>
        </Stack>
        :

        // Display line (add button) - 
        <Tooltip title="ADD A SECTION">
          <Button onClick={() => setAddingMode(true)}>
            <Stack direction={'row'} spacing={'2%'}>
              <AddIcon color="primary"/>
            </Stack>
          </Button>
        </Tooltip>
      }
        
      {/* Loader -  */}
      { 
        loadingMode 
        && 
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box> 
      }
    </Stack>
  )
}

export default TemplateSections