import { Button, Stack, Typography } from '@mui/material';
import NewBiuldingPermitSections from './NewBiuldingPermitSections/NewBiuldingPermitSections';
import NewBiuldingPermitFiles from './NewBiuldingPermitFiles/NewBiuldingPermitFiles';
import NewBuildingPermitName from './NewBuildingPermitName/NewBuildingPermitName';
import { useContext, useEffect, useState } from 'react';
import { SetNotificationContext } from '../../../Context/NotificationContext';
import axios from 'axios';
import { BUILDING_PERMIT_FILES_URL, BUILDING_PERMIT_SECTIONS_URL, BUILDING_PERMIT_URL, FILE_TEMPLATE_URL, SECTION_TENPLATE_URL } from '../../../infra/urls';
import { useNavigate } from 'react-router-dom';


const NewBuildingPermit = () => {

  // Navigate - 
  const navigate = useNavigate()

  // File and section template lists states - 
  const [files, setFiles] = useState([])
  const [sections, setSections] = useState([])

  // Notification cotext - 
  const setNotification = useContext(SetNotificationContext)

  // Send a new building permit data states - 
  const [name, setNmae] = useState()
  const [buildingPermitSections, setBuildingPermitSections] = useState({})
  const [buildingPermitFiles, setBuildingPermitFiles] = useState({})
  
  // GET template lists
  const fetchData = async() => {
    try{
      // Get lists - 
      const responseFiles = await axios.get(FILE_TEMPLATE_URL)
      const responseSections = await axios.get(SECTION_TENPLATE_URL)

      // Update lists states - 
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

    // Send a new building permit handler - 
    const handleSend = async() => {
      try{
        // Checking that all sections and files were provided - 
        if(
          sections.length === Object.keys(buildingPermitSections).length 
          && 
          files.length === Object.keys(buildingPermitFiles).length
          )
        {
          // POST building permit - 
          const response = await axios.post(
          `${BUILDING_PERMIT_URL}/`,
          {name: name}
        )
        console.log(response)

        // POST building permit sections - 
        for(const sectionKey in buildingPermitSections){
          if (buildingPermitSections.hasOwnProperty(sectionKey)){
            try{
              const responseSection = await axios.post(
                BUILDING_PERMIT_SECTIONS_URL,
                {
                  content: buildingPermitSections[sectionKey],
                  building_permit: response.data.id,
                  section_template: sectionKey
                }
              )
              console.log(responseSection)
            } catch (error) {
              // Error notification - 
              setNotification(
                {
                  open: true, 
                  msg: `PLEASE MAKE SURE YOU FILLED EVERYTHING`, 
                  error: `${error.message}`,
                  severity: 'warning'
                }
              )
              console.error(error);
            }
          }
        }

        // POST building permit files - 
        for(const fileKey in buildingPermitFiles){
          if (buildingPermitFiles.hasOwnProperty(fileKey)){
            // Form data for the file link - 
            const data = new FormData()
            data.append('link', buildingPermitFiles[fileKey])
            data.append('building_permit', response.data.id)
            data.append('file_template', fileKey)
            try {
              console.log(data)
              const responseFiles = await axios.post(
                BUILDING_PERMIT_FILES_URL, data
              )
              console.log(responseFiles);
            } catch (error) {
              // Error notification - 
              setNotification(
                {
                  open: true, 
                  msg: `PLEASE MAKE SURE YOU FILLED EVERYTHING`, 
                  error: `${error.message}`,
                  severity: 'warning'
                }
              )
              console.error(error);
            }
          }
        }

        // After all status 200 posts - 
        // Success notification -
        setNotification(
          {
            open: true, 
            msg: "THE BUILDING PERMIT HAS BEEN SENT", 
            severity: 'success'
          }
        )
        // Navigate to building permits page - 
        navigate('/building-permits')

        // Error when not providing all sections and files - 
        } else{
          // Error notification - 
          setNotification(
            {
              open: true, 
              msg: `PLEASE MAKE SURE YOU FILLED EVERYTHING`, 
              severity: 'warning'
            }
          )
        }
      
      }catch(error){
        // Error notification - 
        setNotification(
          {
            open: true, 
            msg: `PLEASE MAKE SURE YOU FILLED EVERYTHING`, 
            error: `${error.message}`,
            severity: 'warning'
          }
        )
        console.log(error)
      }
    }


  return(
    <Stack 
      direction={"column"} 
      spacing={{lg: '3%', md:'3%', xs: '20%'}}
      alignItems={"center"}
    >
      {/* Title */}
      <Typography 
        width={'100%'} 
        color={'primary'} 
        variant="h4" 
        sx={{'text-align': 'center','fontWeight': 800}}
      >
          SEND A NEW BUILDING PERMIT
      </Typography>
      <Stack
        direction={'column'} 
        alignItems={'center'} 
        width={{lg: '50%',md: '50%', xs: '100%'}}
      >
        {/* New name component */}
        <NewBuildingPermitName name={name} setNmae={setNmae}/>
      </Stack>
                  
      <Stack 
        direction={{lg: 'row', md: 'row', xs: 'column'}} 
        width={{lg:'100%', md: '100%'}} 
        alignItems={'center'} 
        spacing={'10%'} 
        justifyContent={'center'}
      >
        {/* New sections component */}
        <NewBiuldingPermitSections setBuildingPermitSections={setBuildingPermitSections} sections={sections}></NewBiuldingPermitSections>
        {/* New files component */}
        <NewBiuldingPermitFiles setBuildingPermitFiles={setBuildingPermitFiles} files={files}></NewBiuldingPermitFiles>
      </Stack>

      {/* Send button */}
      <Button 
        onClick={handleSend}
        type="submit"
        size="lg"
        variant='contained'
        color="primary"
        sx={{
          width: {lg: '50%',md: '50%', xs: '100%'}, 
          borderRadius: '0px'
        }}
      >
          SEND
        </Button>
    </Stack>
  )
}

export default NewBuildingPermit