import { Box, LinearProgress, List, Stack } from "@mui/material"
import FileDetails from "./FileDetails/FileDetails";
import InfiniteScroll from "react-infinite-scroller";


const FilesList = ({next, filesList, fetchData, companyManager}) => {

  return(
    <>
      <Stack width={{lg:'30%', md: '50%'}} direction={'column'} spacing={'3%'}>
        <List sx={{maxWidth: '100%', padding: 0}}>
          <InfiniteScroll
            pageStart={0}
            loadMore={fetchData}
            hasMore={next !== null}
            loader={
              <Box sx={{ width: '100%' }}>
                <LinearProgress />
              </Box> 
            }
          >
            {
              filesList.map((fileData) => ( 
                <div key={fileData.id}>

                  {/* File details component -  */}
                  <FileDetails companyManager={companyManager} fetchData={fetchData} fileData={fileData}/>
                </div>
              ))
            }
          </InfiniteScroll>
        </List>
      </Stack>
    </>
  )
}

export default FilesList