import React, { useState } from "react";
import { Topbar } from "../../Topbar";
import { CameraView } from "../../CameraView";
import BottomNavBar from "../../BottomNavBar";
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
  SnackbarCloseReason,
} from "@mui/material";
import Paths from "../paths";
import { useNavigate } from "react-router-dom";

const CaptureSafteyEquipmentScreen: React.FC = () => {
  const nav = useNavigate();

  const [open, setOpen] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openDialog, setOpenDialog] = useState(true);

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Box width="100vw">
      <Topbar 
        title="Safety Verification" 
        leftButtonText="HomeIcon"
        />
      <CameraView
        onCapture={() => {
          setOpen(true);
        }}
      />
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => {
          setOpenSuccess(true);
        }}
      >
        <Alert
          onClose={handleClose}
          severity="info"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Verifying your saftey equipment...
        </Alert>
      </Snackbar>
      <Snackbar
        open={openSuccess}
        autoHideDuration={1000}
        onClose={() => {
          void nav(Paths.checklist);
        }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Verified!
        </Alert>
      </Snackbar>
      <Dialog
        open={openDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Verify Your Saftey Equipment"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Take a photo of your saftey equipment so that we can verify you have
            everything to need to continue safely.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpenDialog(false);
            }}
          >
            Continue
          </Button>
        </DialogActions>
      </Dialog>

      <BottomNavBar />
    </Box>
  );
};

export default CaptureSafteyEquipmentScreen;
