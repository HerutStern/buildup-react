import { Box, Button, IconButton, LinearProgress, Stack, TextField, Tooltip, Typography } from "@mui/material"
import DriveFileRenameOutlineSharpIcon from '@mui/icons-material/DriveFileRenameOutlineSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import SaveSharpIcon from '@mui/icons-material/SaveSharp';
import { useContext, useState } from "react";
import axios from "axios";
import { SetNotificationContext } from "../../../../../Context/NotificationContext";
import { SECTION_TENPLATE_URL } from "../../../../../infra/urls";


const TamplateSectionDetails = ({sectionData, fetchData}) => {

    // Notification cotext - 
    const setNotification = useContext(SetNotificationContext)

    // Loading mode state - 
    const [loadingMode, setLoadingMode] = useState(false)
    // Editing mode state - 
    const [editMode, setEditMode] = useState(false)

    // New section name state - 
    const [newName, setNewName] = useState(sectionData.name)
    
    // Delete section handler (DELETE) - 
    const deleteSection = async (event) => {
      try{
        event.preventDefault();
        // Start loading mode - 
        setLoadingMode(true) 
  
        // DELETE - 
        const response = await axios.delete(
          `${SECTION_TENPLATE_URL}/${sectionData.id}/`
        )
        console.log(response)

        // Updating the list of the sections to the page - 
        fetchData()
        // Info notification - 
        setNotification(
          {
            open: true, 
            msg: `THE SECTION HAS BEEN DELETED`, 
            severity: 'info'
          }
        )
      }

      catch(error){
        // Error notification - 
        setNotification(
          {
            open: true, 
            msg: `SECTION DELETE FAILED`, 
            error: `${error.message}`,
            severity: 'warning'
          }
        )
        console.log(error)
      }
      finally{
        // End loading - 
        setLoadingMode(false)
      }
    }

    // Update section name handler (PATCH) - 
    const updateNewName = async (event) => {
      try{
        event.preventDefault();
        // Start loading mode - 
        setLoadingMode(true) 
  
        // PATCH - 
        const response = await axios.patch(
          `${SECTION_TENPLATE_URL}/${sectionData.id}/`,
          {name: newName}
        )
        console.log(response)
  
        // Updating the list of the sections to the page - 
        fetchData()
      }
  
      catch(error){
        // Error notification - 
        setNotification(
          {
            open: true, 
            msg: `SECTION UPDATE FAILED - PLEASE MAKE SURE YOU PROVIDED A SECTION NAME`, 
            error: `${error.message}`,
            severity: 'warning'
          }
        )
        console.log(error)
      }
  
      finally{
        // End loading and edit mode - 
        setEditMode(false)
        setLoadingMode(false)
      }
    }

  return(
    <Stack width={'100%'} direction={'column'}>
      {
        // On edit mode the edit line will be displayed, otherwise the section will be displayed
        editMode

        ?
        // Section edit line - 
        <Stack direction={'row'} alignItems={'center'} >
          
          {/* Section name input - */}
          <TextField 
            disabled={loadingMode} 
            label={'SECTION'} 
            value={newName}
            size='small'
            variant="standard" 
            color='primary' 
            onChange={(event) => setNewName(event.target.value)} 
            sx={{
              width: '100%', 
              '& .MuiOutlinedInput-root': {borderRadius: '0px ! important'}
            }}
          />

          {/* Save button - */}
          <Tooltip title="SAVE">
            <Button  disabled={loadingMode} onClick={updateNewName}>
              <SaveSharpIcon color="primary"/>
            </Button>
          </Tooltip>
          
          {/* Close button - */}
          <Tooltip title="CANCEL">
            <Button onClick={() => setEditMode(false)}>
              <CloseSharpIcon color="primary"/>
            </Button>
          </Tooltip>
        </Stack>

        : 
        // Section display line - 
        <Stack 
          width={'100%'}
          direction={'row'} 
          alignItems={'center'}
        >

          {/* Section name - */}
          <Typography 
            variant="caption" 
            width={'100%'} 
            color={'primary'}
          >
            {sectionData.name}
          </Typography>
          
          <Stack paddingLeft={3} direction={'row'}>
            {/* Rename button - */}
            <Tooltip title="RENAME">
              <IconButton disabled={loadingMode} onClick={() => setEditMode(true)}>
                <DriveFileRenameOutlineSharpIcon color='primary'/>
              </IconButton>
            </Tooltip>

            {/* Remove button - */}
            <Tooltip title="DELETE">
              <IconButton disabled={loadingMode}  onClick={deleteSection}>
                <DeleteSharpIcon color="primary"/>
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
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

export default TamplateSectionDetails