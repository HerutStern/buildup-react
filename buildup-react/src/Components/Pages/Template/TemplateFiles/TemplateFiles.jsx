import { Box, Button, LinearProgress, List, Stack, TextField, Tooltip, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import SaveSharpIcon from '@mui/icons-material/SaveSharp';
import { useContext, useState } from "react";
import TamplateFileDetails from "./TamplateFileDetails/TamplateFileDetails";
import axios from "axios";
import { FILE_TEMPLATE_URL } from "../../../../infra/urls";
import TemplateFilesParagraph from "../../../Text/TemplateParagraph/TemplateFilesParagraph/TemplateFilesParagraph";
import { SetNotificationContext } from "../../../../Context/NotificationContext";


const TemplateFiles = ({files, fetchData}) => {

  // Notification cotext - 
  const setNotification = useContext(SetNotificationContext)

  // Editing mode state - 
  const [addingMode, setAddingMode] = useState(false)
  // Loading mode state - 
  const [loadingMode, setLoadingMode] = useState(false)

  // New file name state - 
  const [fileName, setFileName] = useState('')

  // Add new file name handler (POST) - 
  const addNewFile = async (event) => {
    try{
      event.preventDefault();
      // Loader on - 
      setLoadingMode(true)

      // POST - 
      const response = await axios.post(
        `${FILE_TEMPLATE_URL}/`,
        {name: fileName}
      )
      console.log(response)

      // Updating the list of the files to the page - 
      fetchData()
      // Success notification - 
      setNotification(
        {
          open: true, 
          msg: "FILE NAME HAS BEEN ADDED", 
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
    <Stack alignItems={'center'} spacing={'5%'}>
      <Stack 
        spacing={'5%'} 
        direction={'column'} 
        alignItems={'center'} 
        width={{lg: '50%',md: '50%', xs: '100%'}}
      >
        {/* Subtitle */}
        <Typography 
          sx={{fontWeight: 700}} 
          variant="h6" 
          color={'primary'}
        >
          FILES
        </Typography>
        <TemplateFilesParagraph/>
      </Stack>
          
      <Stack 
        width={{lg:'60%', md: '50%'}} 
        alignItems={'canter'} 
        direction={'column'} 
        spacing={'3%'}
      >
        {/* File list */}
        <List sx={{maxWidth: '100%', padding: 0}}>
          {
            files.map((fileData) => (
              <div key={fileData.id}>
                {/* File details component */}
                <TamplateFileDetails fetchData={fetchData} fileData={fileData}/>
              </div>
            ))
          }
        </List>
      </Stack> 
      
      {/* Add a file (edit line and display line) */}
      {
        // Edit line (adding mode) - 
        addingMode
        ?
        <Stack direction={'row'} alignItems={'center'}>
          {/* File name input - */}
          <TextField 
            disabled={loadingMode} 
            label={'FILE NAME'} 
            value={fileName}
            size='small'
            variant="standard" 
            color='primary' 
            onChange={(event) => setFileName(event.target.value)} 
            sx={{
              width: '100%', 
              '& .MuiOutlinedInput-root': {borderRadius: '0px ! important'}
            }}
          />

          {/* Save button - */}
          <Tooltip title="SAVE">
            <Button disabled={loadingMode} onClick={addNewFile}>
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
        <Tooltip title="ADD A FILE NAME">
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

export default TemplateFiles