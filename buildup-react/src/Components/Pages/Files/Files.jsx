import { Stack, Typography } from "@mui/material";
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

  useEffect(() => {
    if (user?.user?.profile?.role === 'COMPANY_MANAGER') {
      console.log(user.user.profile.role);
      setCompanyManager(true);
    }
  }, [user.user]);


  // Files list state - 
  const [filesList, setFilesList] = useState({files: []})

  // Page state - 
  const [next, setNext] = useState(null)

  // COMPANY FILES LIST (GET) - 
  const fetchData = async () => {
    let url = COMPANY_FILE_URL
        if (filesList.files.length > 0) {
          url = next
        }
    try{
      const response = await axios.get(url)
      console.log(response.data.results)

      // Updating the list of the files to the page - 
      setFilesList({files: [...filesList.files, ...response.data.results]})
      // Updating page - 
      setNext(response.data.next)
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
      <Stack 
        spacing={{lg: '4%', md: '4%', xs: '14%'}} 
        direction="column" 
        alignItems={"center"}
      > 
        <Stack direction={'column'} alignItems={"center"} spacing={'10%'}>

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
        
        {/* Files list component */}
        <FilesList next={next} companyManager={companyManager} fetchData={fetchData} filesList={filesList.files}/>
      </Stack>
    </>
  );
}

export default Files