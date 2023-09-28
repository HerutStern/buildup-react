import FileUploadSharpIcon from '@mui/icons-material/FileUploadSharp';
import { Button, LinearProgress, Stack, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { COMPANY_FILE_URL } from '../../../../infra/urls';
import React from 'react';
import './Upload.css';
import { SetNotificationContext } from '../../../../Context/NotificationContext';

const Upload = ({fetchData}) => {

  // Notification use cotext - 
  const setNotification = useContext(SetNotificationContext)

  // Loading mode state - 
  const [loadingMode, setLoadingMode] = useState(false)

  // New file infotmation states:
  const [newFile, setNewFile] = useState('')
  const [newFileName, setNewFileName] = useState('')
  const fileInputRef = useRef(null);
    
  // Handling uploading a file -   
  const uploadHandler = (event) => {
    if (event.target.files) {
      setNewFile(event.target.files[0])
    }
  }

  // CREAT COMPANY FILE (POST) - 
  const UseSaveFile = async (event) => {
    try{
      event.preventDefault();

      // Start loading mode - 
      setLoadingMode(true) 

      // POST - 
      const response = await axios.post(
        COMPANY_FILE_URL,
        {link: newFile, name: newFileName},
        {headers:
          {'Content-Type': 'multipart/form-data'}
        }
      )
      console.log(response)

      // Clear search - 
      setNewFileName('')
      setNewFile('')
      fileInputRef.current.value = null

      // Updating the list of the files to the page - 
      fetchData()
      
      // Notification - 
      setNotification(
        {
          open: true, 
          msg: "FILE HAS BEEN UPLOADED SUCCESSFULLY", 
          severity: 'success'
        }
      )
    }

    catch(error){
      // Notification - 
      setNotification(
        {
          open: true, 
          msg: `FILE UPLOAD FAILED - PLEASE MAKE SURE YOU PROVIDED A FILE AND A NAME`, 
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

  return(
    <>
      <Stack direction={'column'} spacing={'4%'} >
        {/* Upload input - */}
        <Stack>
          <div className='upload-div'>
            <Stack 
              justifyContent={"center"} 
              alignItems={"center"} 
              direction={"row"} 
              spacing={"1em"}
            >

              <Typography sx={{fontWeight: 700}} color={'primary'}>
                UPLOAD A NEW FILE
              </Typography>

              <FileUploadSharpIcon color='primary'  />
            </Stack>
            
            <input 
              ref={fileInputRef}
              disabled={loadingMode} 
              type="file" 
              onChange={uploadHandler} 
              className='upload-input'
            />
          </div>
        </Stack>

        {/* Name input - */}
        <TextField 
          disabled={loadingMode} 
          label={'NEW FILE NAME'} 
          value={newFileName}
          size='small'
          variant="outlined" 
          color='primary' 
          onChange={(e) => setNewFileName(e.target.value)} 
          sx={{'& .MuiOutlinedInput-root': {borderRadius: '0px ! important'}}}
        />

        {/* Submit button - */}
        <Button 
          disabled={loadingMode} 
          onClick={UseSaveFile} 
          variant='contained' 
          color="primary" 
          className='submit-button'
          sx={{borderRadius: '0px'}}
        >
          UPLOAD
        </Button>
        
        {/* Loader - */}
        { loadingMode && <LinearProgress  /> }
      </Stack>
    </>
  )
}

export default Upload