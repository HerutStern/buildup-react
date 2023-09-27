import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

const PopUp = ({open, setOpen, title, text, yesFunction}) => {

  const handleClose = () => {
    setOpen(false);
  };
  
  return(
    <>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
          {title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            {text}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={yesFunction}>YES</Button>
            <Button onClick={handleClose} autoFocus>
              CANCEL
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  )
}

export default PopUp