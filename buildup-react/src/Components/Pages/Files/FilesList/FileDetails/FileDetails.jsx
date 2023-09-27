import { Box, Button, IconButton, LinearProgress, Stack, TextField, Tooltip, Typography } from "@mui/material"
import DriveFileRenameOutlineSharpIcon from '@mui/icons-material/DriveFileRenameOutlineSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import DownloadSharpIcon from '@mui/icons-material/DownloadSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import SaveSharpIcon from '@mui/icons-material/SaveSharp';
import { useContext, useState } from "react";
import axios from "axios";
import { COMPANY_FILE_URL } from "../../../../../infra/urls";
import PopUp from "../../../../PopUp/PopUp";
import { SetNotificationContext } from "../../../../../Context/NotificationContext";


const FileDetails = ({fileData, fetchData, companyManager}) => {

  // Notification use cotext - 
  const setNotification = useContext(SetNotificationContext)

  // Loading mode state - 
  const [loadingMode, setLoadingMode] = useState(false)

  // Editing mode state - 
  const [editMode, setEditMode] = useState(false)

  // Temporary name on change -  
  const [newName, setNewName] = useState(fileData.name)

  const [open, setOpen] = useState(false);

  const deleteFile = async (event) => {
    try{
      event.preventDefault();

      // Start loading mode - 
      setLoadingMode(true) 

      // POST - 
      const response = await axios.delete(
        `${COMPANY_FILE_URL}${fileData.id}/`
      )
        console.log(response)

        // Updating the list of the files to the page - 
        fetchData()

        // Notification - 
        setNotification(
          {
            open: true, 
            msg: `FILE WAS DELETED`, 
            severity: 'info'
          }
        )
    }

    catch(error){
      // Notification - 
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
      // fetchData()
      // End loading and edit mode - 
      setLoadingMode(false)
    }
  }

  const updateNewName = async (event) => {
    try{
      event.preventDefault();

      // Start loading mode - 
      setLoadingMode(true) 

      // POST - 
      const response = await axios.patch(
        `${COMPANY_FILE_URL}${fileData.id}/`,
        {name: newName}
      )
        console.log(response)

      // Updating the list of the files to the page - 
      fetchData()
    }

    catch(error){
      // Notification - 
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
    <>
      <PopUp 
        open={open} 
        setOpen={setOpen} 
        title={"ARE YOU SURE YOU WANT TO DELETE THIS FILE?"} 
        text={"CLICK 'YES' TO DELETE"} 
        yesFunction={deleteFile} 
      />

      <Stack width={'100%'} direction={'column'}>
        {
          // On edit mode the edit line will be displayed, otherwise the file will be displayed
          editMode

          ?
          // File edit line - 
          (<Stack direction={'row'} alignItems={'center'}>
            
            {/* Name input - */}
            <TextField 
              disabled={loadingMode} 
              label={'NAME'} 
              value={newName}
              size='small'
              variant="standard" 
              color='primary' 
              onChange={(event) => setNewName(event.target.value)} 
              sx={{width: '100%', '& .MuiOutlinedInput-root': {borderRadius: '0px ! important'}}}
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
          </Stack> )

          : 
          // File display line - 
          (<Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>

            {/* File name - */}
            <Typography 
              variant="caption" 
              width={'100%'} 
              color={'primary'}
            >
              {fileData.name}
            </Typography>

            {/* Rename button - */}
            {
              companyManager // Only company manager can rename files 
              && 
              <Tooltip title="RENAME">
                <IconButton disabled={loadingMode} onClick={() => setEditMode(true)}>
                  <DriveFileRenameOutlineSharpIcon color='primary'/>
                </IconButton>
              </Tooltip>
            }

            {/* Delete button - */}
            {
              companyManager // Only company manager can delete files 
              && 
              <Tooltip title="DELETE">
                <IconButton disabled={loadingMode} onClick={() => setOpen(true)}>
                  <DeleteSharpIcon color='primary'/>
                </IconButton>
              </Tooltip>
            }
            
            {/* Download button - */}
            <Tooltip title="DOWNLOAD">
              <Button disabled={loadingMode} component="label">
                <a 
                  href={fileData.link}
                  target="_blank" 
                  download
                >
                  <DownloadSharpIcon  color={'primary'}/>
                </a>
              </Button>
            </Tooltip>
          </Stack>)
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
    </>
  )
}

export default FileDetails