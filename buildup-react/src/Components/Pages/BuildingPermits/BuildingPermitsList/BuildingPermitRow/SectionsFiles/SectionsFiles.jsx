import { Button, Stack, Tooltip, Typography } from "@mui/material"
import DownloadSharpIcon from '@mui/icons-material/DownloadSharp';
import Divider from '@mui/material/Divider';


const SectionsFiles = ({sections, files}) => {

  return(
    <Stack 
      direction={'row'} 
      spacing={'2%'}  
      justifyContent={'space-around'}
    >
      <Stack 
        direction={'column'} 
        spacing={'3%'} 
        alignItems={'center'} 
        width={'100%'}
      >
        {/* Sections title */}
        <Typography variant="caption" color={'secondary'}>
          DETAILS
        </Typography>
        <Stack 
          direction={'column'} 
          width={'100%'} 
          spacing={'2%'}
        >
          {/* Sections */}
          {
            sections.length === 0 
            ? 
            <Typography color={'secondary'} variant="caption">
              <i>
                none
              </i>
            </Typography> 
            : 
            sections.map((section) => (
            <Typography color={'secondary'} variant="caption">
              {section.name} - &nbsp;
              <b>
                {section.content}
              </b>
            </Typography>
            ))
          } 
        </Stack>
      </Stack>

      {/* Divider */}
      <Divider orientation="vertical" flexItem/>

      <Stack 
        direction={'column'} 
        spacing={'3%'} 
        alignItems={'center'} 
        width={'100%'}
      >
        {/* Files title */}
        <Typography variant="caption" color={'secondary'}>
          FILES
        </Typography>

        <Stack 
          direction={'column'} 
          width={'100%'} 
          spacing={'2%'}
        >
          {/* Files */}
          {
            files.length === 0 
            ? 
            <Typography color={'secondary'} variant="caption">
              <i>
                none
              </i>
            </Typography> 
            : 
            files.map((file) => (
            <Typography color={'secondary'} variant="caption">
              {file.name} - 
              <Tooltip title="DOWNLOAD">
                <Button component="label">
                  <a 
                    href={file.link}
                    target="_blank" 
                    download
                  >
                    <DownloadSharpIcon color={'secondary'}/>
                  </a>
                </Button>
              </Tooltip>
            </Typography>
            ))  
          } 
        </Stack>
      </Stack>
    </Stack>
  )
}

export default SectionsFiles