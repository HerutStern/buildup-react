import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { Box, Button, Divider, IconButton, LinearProgress, Stack, TextField, Tooltip, Typography } from "@mui/material";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { GET_COMPANY_FILES_URL, CREAT_COMPANY_FILES_URL } from '../../../infra/urls';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import Upload from './Upload/Upload';

const Files = () => {
  const [filesList, setFilesList] = useState([])



  

  const fetchData = async () => {
        try{
        // event.preventDefault();
      const response = 
        await axios.get(GET_COMPANY_FILES_URL)
        console.log(response.data.results)
        setFilesList(response.data.results)

      }
      catch(error){
        console.log(error)

      }
  };

  useEffect(() => {
    
    fetchData()
  },['']) 

 

  return(
    <>
      <Stack spacing={'4%'} direction="column" alignItems={"center"}>
      <Stack direction={'column'} alignItems={"center"} spacing={'6%'}>
        <Typography color={'primary'} variant="h3" style={{'text-align': 'center', 'fontWeight': 800}}>
        COMPANY FILES</Typography>
        <Upload fetchData={fetchData}/>
      </Stack>
      
      <Stack direction={'column'} spacing={'1%'}>
        {
        
        filesList.map((fileData) => (
          
            <>
            <Box  sx={{width: "auto"}}>
            <Stack direction={"row"} alignItems={'center'} justifyContent={'center'}>
              <Typography  variant="caption" width={'100%'} color={'primary'}>
                {fileData.name}</Typography>
              <Tooltip title="RENAME">
                <IconButton >
                <DriveFileRenameOutlineIcon color='primary'/>
              </IconButton>
              </Tooltip>
              
              <Tooltip title="DELETE">
                <IconButton>
                  <DeleteIcon color='primary'/>
                </IconButton>
              </Tooltip>

              <Tooltip title="DOWNLOAD">
                <Button component="label">
                  <a href={fileData.link}
                  target="_blank" download>
                      <FileDownloadOutlinedIcon  color={'primary'}/>
                  </a>
                </Button>
              </Tooltip>
              
              
              
              </Stack>
              </Box> 
            </>
          
        ))
}
      </Stack>
{/*         
        <Button onClick={saveFile} variant='contained'
            color="primary"
            sx={{width: '20%', borderRadius: '0px'}}>
        save
      </Button> */}
      </Stack>

    </>
  );
}

export default Files