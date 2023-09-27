import { Alert, Snackbar } from "@mui/material"
import { useState } from "react"
import { SetNotificationContext } from "../../Context/NotificationContext";

const Notification = ({children}) => {

    const [notification, setNotification] = useState({
        open: false,
        msg: "",
        error: '',
        severity: ""
    })

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        //   return;
        }
        setNotification({...notification, open: false});
      };

    return(
        <>
        <SetNotificationContext.Provider value={setNotification}>
            {children}
        </SetNotificationContext.Provider>
        
        <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleClose}
        // message={notification.msg}
        // action={action}
      >
        <Alert variant="filled" 
        color="primary" onClose={handleClose} 
        severity={notification.severity} sx={{ width: '100%', borderRadius: '0px' }}>
            {notification.msg}<br/>{notification.error}
        </Alert>
      </Snackbar>
      </>
    )
}
 export default Notification