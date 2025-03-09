import React from "react";
import { Topbar } from "../../Topbar";
import { CameraView } from "../../CameraView";
import BottomNavBar from "../../BottomNavBar";
import { Alert, Box, Snackbar, SnackbarCloseReason } from "@mui/material";
import Paths from "../paths";
import { useNavigate } from "react-router-dom";

const CaptureSafteyEquipmentScreen: React.FC = () => {
  const nav = useNavigate();
  const [open, setOpen] = React.useState(false);

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
      <Topbar title="Take a Photo of Your Safety Equipment" />
      <CameraView
        onCapture={() => {
          setOpen(true);
        }}
      />
      <Snackbar
        open={open}
        autoHideDuration={3000}
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
          Your saftey equipment has been verified
        </Alert>
      </Snackbar>
      <BottomNavBar />
    </Box>
  );
};

export default CaptureSafteyEquipmentScreen;
