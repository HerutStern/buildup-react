import { List, Stack } from "@mui/material"
import FileDetails from "./FileDetails/FileDetails";


const FilesList = ({filesList, fetchData, companyManager}) => {

  return(
    <>
      <Stack width={{lg:'60%', md: '50%'}} direction={'column'} spacing={'3%'} alignItems={'center'}>
        <List sx={{maxWidth: '100%', padding: 0}}>
            {
              filesList.map((fileData) => ( 
                <div key={fileData.id}>
                  {/* File details component -  */}
                  <FileDetails companyManager={companyManager} fetchData={fetchData} fileData={fileData}/>
                </div>
              ))
            }
        </List>
      </Stack>
    </>
  )
}

export default FilesList