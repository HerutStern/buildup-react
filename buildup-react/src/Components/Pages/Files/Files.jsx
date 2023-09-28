import { Box, LinearProgress, Stack, Typography } from "@mui/material";
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { COMPANY_FILE_URL } from '../../../infra/urls';
import Upload from './Upload/Upload';
import FilesList from './FilesList/FilesList';
import './Files.css';
import { UserContext } from "../../../Context/UserContext";


const Files = () => {

  // User context and company manager state - 
  const [companyManager, setCompanyManager] = useState(false);
  const user = useContext(UserContext);

  // Page and loader states - 
  const [loadingMode, setLoadingMode] = useState(false)  

  useEffect(() => {
    if (user?.user?.profile?.role === 'COMPANY_MANAGER') {
      // console.log(user.user.profile.role);
      setCompanyManager(true);
      fetchData()
    }
  }, [user.user]);


  // Files list state - 
  const [filesList, setFilesList] = useState([])


  // COMPANY FILES LIST (GET) - 
  const fetchData = async () => {
    try{
      // Loader - 
      setLoadingMode(true)

      // GET
      const response = await axios.get(COMPANY_FILE_URL)
      console.log(response.data.results)

      // Updating the list of the files to the page - 
      setFilesList(response.data.results)
      setLoadingMode(false)
    }
    catch(error){
      console.log(error)
    }
  };


  return(
    <>
      <Stack 
        spacing={{lg: '4%', md: '4%', xs: '14%'}} 
        direction="column" 
        alignItems={"center"}
      > 
        <Stack direction={'column'} alignItems={"center"} spacing={'6%'}>

          {/* Title */}
          <Typography 
            color={'primary'} 
            variant="h3" 
            className="title" 
            sx={{fontWeight: 800}}
          >
            COMPANY FILES
          </Typography>

          {/* Upload component */}
          {
          companyManager // Only company manager can upload files 
          &&
          <Upload fetchData={fetchData}/>
          }
        </Stack>
        
        {/* Loader */}
        {
          loadingMode 
          && 
          <Box sx={{width: '50%'}}>
            <LinearProgress />
          </Box> 
        }

        {/* files list component */}
        <FilesList companyManager={companyManager} fetchData={fetchData} filesList={filesList}/>
      </Stack>
    </>
  );
}

export default Files