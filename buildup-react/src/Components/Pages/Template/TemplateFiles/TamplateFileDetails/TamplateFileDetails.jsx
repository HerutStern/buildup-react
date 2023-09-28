import { Box, Button, IconButton, LinearProgress, Stack, TextField, Tooltip, Typography } from "@mui/material"
import DriveFileRenameOutlineSharpIcon from '@mui/icons-material/DriveFileRenameOutlineSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import SaveSharpIcon from '@mui/icons-material/SaveSharp';
import { useContext, useState } from "react";
import axios from "axios";
import { SetNotificationContext } from "../../../../../Context/NotificationContext";
import { FILE_TEMPLATE_URL } from "../../../../../infra/urls";


const TamplateFileDetails = ({fileData, fetchData}) => {

    // Notification cotext - 
    const setNotification = useContext(SetNotificationContext)

      // Loading mode state - 
      const [loadingMode, setLoadingMode] = useState(false)
      // Editing mode state - 
      const [editMode, setEditMode] = useState(false)
  
      // New file name state - 
      const [newName, setNewName] = useState(fileData.name)

      // Delete file handler (DELETE) - 
      const deleteFile = async (event) => {
        try{
          event.preventDefault();
          // Start loading mode - 
          setLoadingMode(true) 
    
          // DELETE - 
          const response = await axios.delete(
            `${FILE_TEMPLATE_URL}/${fileData.id}/`
          )
          console.log(response)
  
          // Updating the list of the files to the page - 
          fetchData()
          // Info notification - 
          setNotification(
            {
              open: true, 
              msg: `THE FILE NAME HAS BEEN DELETED`, 
              severity: 'info'
            }
          )
        }
    
        catch(error){
          // Error notification - 
          setNotification(
            {
              open: true, 
              msg: `FILE DELETE FAILED`, 
              error: `${error.message}`,
              severity: 'warning'
            }
          )
          console.log(error)
        }
    
        finally{
          // End loading mode - 
          setLoadingMode(false)
        }
      }

      // Update file name handler (PATCH) - 
      const updateNewName = async (event) => {
        try{
          event.preventDefault();
          // Start loading mode - 
          setLoadingMode(true) 
    
          // PATCH - 
          const response = await axios.patch(
            `${FILE_TEMPLATE_URL}/${fileData.id}/`,
            {name: newName}
          )
          console.log(response)
    
          // Updating the list of the files to the page - 
          fetchData()
        }
    
        catch(error){
          // Error notification - 
          setNotification(
            {
              open: true, 
              msg: `FILE UPDATE FAILED - PLEASE MAKE SURE YOU PROVIDED A FILE NAME`, 
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
        // On edit mode the edit line will be displayed, otherwise the file will be displayed
        editMode

        ?
        // File edit line - 
        <Stack direction={'row'} alignItems={'center'} >
          
          {/* File name input - */}
          <TextField 
            disabled={loadingMode} 
            label={'FILE NAME'} 
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
        // File display line - 
        <Stack 
          width={'100%'}
          direction={'row'} 
          alignItems={'center'}
        >

          {/* File name - */}
          <Typography 
            variant="caption" 
            width={'100%'} 
            color={'primary'}
          >
            {fileData.name}
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
              <IconButton disabled={loadingMode}  onClick={deleteFile}>
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

export default TamplateFileDetails