import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


const Alerts = () => {
  return(
    <>
      <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
      <Alert
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        This is a success alert — check it out!
      </Alert>
    </>
  )
}

export default Alerts