import { Stack, Typography } from "@mui/material";
import TemplateSections from "./TemplateSections/TemplateSections";
import TemplateFiles from "./TemplateFiles/TemplateFiles";
import { useContext, useEffect, useState } from "react";
import { FILE_TEMPLATE_URL, SECTION_TENPLATE_URL } from "../../../infra/urls";
import axios from 'axios';
import { SetNotificationContext } from "../../../Context/NotificationContext";


const Template = () => {

  // File and section lists states - 
  const [files, setFiles] = useState([])
  const [sections, setSections] = useState([])

  // Notification cotext - 
  const setNotification = useContext(SetNotificationContext)
  
  // GET
  const fetchData = async() => {
    try{
      // Get lists - 
      const responseFiles = await axios.get(FILE_TEMPLATE_URL)
      const responseSections = await axios.get(SECTION_TENPLATE_URL)

      // Set lists states - 
      setFiles(responseFiles.data.results)
      setSections(responseSections.data.results)
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
  };

  // Load data - 
  useEffect(() => {
    fetchData()
  },[]) 

  return(
    <Stack 
      direction={"column"} 
      spacing={{lg: '5%', xs: '20%'}}
      alignItems={"center"}
    >
      {/* Title */}
      <Typography 
        align="justify" 
        width={'100%'} 
        color={'primary'} 
        variant="h4" 
        sx={{textAlign: 'center' ,'fontWeight': 800}}
      >
        BUILDING PERMIT TEMPLATE
      </Typography>
    
      <Stack 
        alignItems={'center'} 
        direction={'column'} 
        spacing={'10%'}
      >
        <Stack 
          direction={{lg: 'row', md: 'row', xs: 'column'}} 
          spacing={'10%'}
        >
          {/* Sections component */}
          <TemplateSections fetchData={fetchData} sections={sections}/>

          {/* Files component */}
          <TemplateFiles fetchData={fetchData} files={files}/>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Template