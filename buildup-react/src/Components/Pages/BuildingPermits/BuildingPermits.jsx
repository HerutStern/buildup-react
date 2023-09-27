import * as React from 'react';
import { Box, Button, LinearProgress, Stack, Typography } from '@mui/material';
import Search from './Search/Search';
import { useState } from 'react';
import BuildingPermitsList from './BuildingPermitsList/BuildingPermitsList';
import { useEffect } from 'react';
import { BUILDING_PERMIT_URL } from '../../../infra/urls';
import axios from 'axios';
import { useContext } from 'react';
import { FilterBuildingPermitContext } from '../../../Context/FilterBuildingPermitContext';
import { BuildingPermitListContext, SetBuildingPermitListContext } from '../../../Context/BuildingPermitListContext';
import NavigateNextSharpIcon from '@mui/icons-material/NavigateNextSharp';
import NavigateBeforeSharpIcon from '@mui/icons-material/NavigateBeforeSharp';
import './BuildingPermits.css'


const BuildingPermits = () => {

  // Filter context - 
  const filterBuildingPermit = useContext(FilterBuildingPermitContext)

  // Rows context - 
  const rows = useContext(BuildingPermitListContext)
  const setRows = useContext(SetBuildingPermitListContext)

  // Page and loader states - 
  const [loadingMode, setLoadingMode] = useState(false)  

  // First rows (GET) - 
  const fetchData = async(url) => {
    try{
      // Loader on - 
      setLoadingMode(true)
      const response = await axios.get(
        url, 
        {params: filterBuildingPermit.params}
      )
      console.log(response.data)
      // Updating rows
      setRows({
        rows: response.data.results,
        next: response.data.next,
        previous: response.data.previous,
        url: url
      })
    }
  catch(error){
    console.log(error)
    }
    finally{
      // Loader off - 
      setLoadingMode(false)
    }
  };

  // Upload first rows - 
  useEffect(() => {
    fetchData(BUILDING_PERMIT_URL)
  },[filterBuildingPermit]) 

    // Next page handler - 
    const handleNextPage = (event) => {
      event.preventDefault();
      fetchData(rows.next)
    }
  
    // Previous page handler - 
    const handlePreviousPage = (event) => {
      event.preventDefault();
      fetchData(rows.previous)
    }

  return(
    <Stack 
      direction={"column"} 
      alignItems={"center"} 
      spacing={'3%'}
    >

      {/* Title */}
      <Typography 
        color='primary' 
        variant="h3" 
        className='title-building-permits' 
      >
        BUILDING PERMITS
      </Typography>

      {/* Search component */}
      <Search 
        loadingMode={loadingMode} 
        setLoadingMode={setLoadingMode}
      />
      
      {/* Loader + Building permit list */}
      {
        loadingMode === true 
        ? 
        <Box sx={{width: '100%'}}>
          <LinearProgress />
        </Box> 
        : 
        <BuildingPermitsList fetchData={fetchData}/>
      }
      
      {/* Navigate page buttons */}
      <Stack 
        direction={'row'} 
        justifyContent={'center'} 
        spacing={'3%'} 
        width={'100%'}
      >
        {
          // Previous page button - 
          rows.previous === null 
          ? 
          <></> 
          :
          <Button 
            sx={{borderRadius: '0px'}} 
            disabled={loadingMode} 
            onClick={handlePreviousPage}
          >
            <NavigateBeforeSharpIcon/>
            PREVIOUS PAGE        
          </Button>
        }
        {
          // Next page button - 
          rows.next === null 
          ? 
          <></> 
          : 
          <Button 
            sx={{borderRadius: '0px'}} 
            disabled={loadingMode} 
            onClick={handleNextPage}
          >
            NEXT PAGE
            <NavigateNextSharpIcon/>
          </Button>  
        }     
      </Stack>         
    </Stack>
  )
}

export default BuildingPermits