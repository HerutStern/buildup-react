import { Stack, Typography } from "@mui/material"
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';


const NewBiuldingPermitFiles = () => {

  const files = [{
    id: 'id 1',
    name: 'file 1'
  },{
    id: 'id 2',
    name: 'file 2'
  },{
    id: 'id 3',
    name: 'file 3 bla bla bla bla'
  }
]

  return(
    <>
        <Stack  direction={'column'} spacing={'15%'}>
          {files.map((file) => (
        <Stack style={{width: '100%'}} direction={"column"} alignItems={'flex-start'} >
        <div style={{
          position:"relative",
          "text-align":"start",
          cursor:"pointer"
          }}
        >
          <Stack  justifyContent={"center"} alignItems={"center"} direction={"row"} spacing={"1em"}>
            <Typography  color={'primary'} variant="caption">
                {file.name}
            </Typography>
            <FileUploadOutlinedIcon color={'primary'} />
            
          </Stack>
          <input type="file"
          style={{position: "absolute",
            opacity: 0,
            cursor: "pointer",
            right: 0,
            top: 0}} />
        </div>
      </Stack>
      ))}
        </Stack>

      
      
    </>
  )
}

export default NewBiuldingPermitFiles