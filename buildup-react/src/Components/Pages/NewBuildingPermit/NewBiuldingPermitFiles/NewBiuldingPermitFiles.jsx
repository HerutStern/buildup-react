import { List, Stack, Typography } from "@mui/material"
import FileUploadSharpIcon from '@mui/icons-material/FileUploadSharp';
import './NewBiuldingPermitFiles.css'


const NewBiuldingPermitFiles = ({files, setBuildingPermitFiles}) => {

  // file upload handler - 
  const handleFileLink = (event, file_template) => {
    if (event.target.files) {
    setBuildingPermitFiles((prevState) => ({
      ...prevState,
      [file_template]: event.target.files[0]
    }));
    }
  }

  return(
    <Stack 
      width={{lg:'20%', md: '25%'}} 
      direction={'column'} 
      alignItems={'center'}
    >
      <List sx={{maxWidth: '100%', padding: 0}}>
        {
          // Files list - 
          files.map((file) => (
            <div style={{ 
              position:"relative",
              "text-align":"start",
              cursor:"pointer"
              }}
            >
              <Stack 
                width={'13em'} 
                paddingBottom={3} 
                spacing={'1%'}
                direction={'row'} 
                alignItems={'space-between'}
              >
                {/* File name */}
                <Typography  width={'100%'} color={'primary'} variant="caption">
                  {file.name} *
                </Typography>
                {/* File upload input */}
                <FileUploadSharpIcon color={'primary'} />
                <Stack>
                  <input 
                    className="file-input"
                    type="file" 
                    onChange={(event) => handleFileLink(event, file.id)}
                  />
                </Stack>
              </Stack>    
            </div>
          ))
        } 
      </List>
    </Stack>
  )
}

export default NewBiuldingPermitFiles