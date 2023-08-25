import { Box, Divider, Input } from "@mui/joy";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { Button, Stack } from "@mui/material";
import Typography from '@mui/joy/Typography';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import DeleteIcon from '@mui/icons-material/Delete';
const Files = () => {


  return(
    <>

      <Stack spacing="2em" direction="column" useFlexGap justifyContent={"center"} alignItems={"center"}>
      <Typography level="display1">FILES</Typography>
      <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}>
        <div style={{
          width: "30em",
          position:"relative",
          "text-align":"start",
          cursor:"pointer"
          }}
        >
          <Stack justifyContent={"center"} alignItems={"center"} direction={"row"} spacing={"1em"}>
            <Typography
              level="h3" 
              sx={{color: "black"}}
              >
                Upload a new file
            </Typography>

            <FileUploadOutlinedIcon 
              fontSize="large" 
              sx={{color: "black"}}
            />
          </Stack>
          <input type="file" 
          style={{
            position: "absolute",
            opacity: 0,
            cursor: "pointer",
            right: 0,
            top: 0,
            height: "100%",
            width: "100%"}} />
        </div>
      </Stack>

      <Box sx={{backgroundColor: 'black', width: "auto"}}>
      <Stack direction={"row"}>
        
        <p style={{paddingLeft: "2em", paddingRight: "2em", color: "white", fontSize:"1.5em"}}>File name</p>
        <Button component="label">
          <a href="" target="_blank" download>
              <FileDownloadOutlinedIcon fontSize="large" 
              sx={{color: "white"}}/>
          </a>
        </Button>
        <Button>
          <DeleteIcon fontSize="medium" 
              sx={{color: "white"}}/>
        </Button>   
 
        </Stack>
        <Stack direction={"row"}>
        
        <p style={{paddingLeft: "2em", paddingRight: "2em", color: "white", fontSize:"1.5em"}}>File name</p>
        <Button component="label">
          <a href="" target="_blank" download>
              <FileDownloadOutlinedIcon fontSize="large" 
              sx={{color: "white"}}/>
          </a>
        </Button>
        <Button>
          <DeleteIcon fontSize="medium" 
              sx={{color: "white"}}/>
        </Button>   
 
        </Stack>
        </Box>
      </Stack>

    </>
  );
}

export default Files