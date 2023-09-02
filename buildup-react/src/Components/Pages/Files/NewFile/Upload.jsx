import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { Button, LinearProgress, Stack, TextField, Typography } from "@mui/material";
import { useState } from 'react';
import axios from 'axios';
import { CREAT_COMPANY_FILE_URL } from '../../../../infra/urls';
import React from 'react';
import './Upload.css';

const Upload = ({fetchData}) => {

  // Loading mode state - 
  const [loadingMode, setLoadingMode] = useState(false)

  // New file infotmation states:
  const [newFile, setNewFile] = useState('')
  const [newFileName, setNewFileName] = useState('')

  // Handling uploading a file -   
  const uploadHandler = (event) => {
    if (event.target.files) {
      setNewFile(event.target.files[0])
    }
  }

  // CREAT COMPANY FILE (POST) - 
  const saveFile = async (event) => {
    try{
      event.preventDefault();

      // Start loading mode - 
      setLoadingMode(true) 

      // POST - 
      const response = await axios.post(
        CREAT_COMPANY_FILE_URL,
        {link: newFile, name: newFileName},
        {headers:
          {'Content-Type': 'multipart/form-data'}
        }
      )
        console.log(response)

      // Clear search - 
      setNewFile('')
      setNewFileName('')

      // Updating the list of the files on the page - 
      fetchData()
    }

    catch(error){
      // !!! ALERT !!!
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

        {/* Upload typography - */}
        <Stack>
          <div className='upload-div'>
            <Stack 
              justifyContent={"center"} 
              alignItems={"center"} 
              direction={"row"} 
              spacing={"1em"}>
              <Typography>
                UPLOAD A NEW FILE
              </Typography>

              {/* Upload icon - */}
              <FileUploadOutlinedIcon  />
            </Stack>
            
            {/* Upload input - */}
            <input 
              disabled={loadingMode} 
              type="file" 
              onChange={uploadHandler} 
              className='upload-input'/>
          </div>
        </Stack>

        {/* Name input - */}
        <TextField disabled={loadingMode} label={'NEW FILE NAME'} 
        value={newFileName}
        size='small'
        variant="outlined" 
        color='primary' 
        onChange={(e) => setNewFileName(e.target.value)} className='name-input'
        // style={{width: '100%' ,'& .MuiOutlinedInput-root': {borderRadius: '0px'}}}
        />

      {/* Upload button - */}
      <Button disabled={loadingMode} onClick={saveFile} variant='contained'
              color="primary"
              sx={{width: '100%', borderRadius: '0px'}}>
          UPLOAD
        </Button>
        { loadingMode && <LinearProgress  /> }
        
      </Stack>
    </>
  )
}

export default Upload