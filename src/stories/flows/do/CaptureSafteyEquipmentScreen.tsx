import React from "react";
import { Topbar } from "../../Topbar";
import { CameraView } from "../../CameraView";
import BottomNavBar from "../../BottomNavBar";
import { Box } from "@mui/material";

const CaptureSafteyEquipmentScreen: React.FC = () => {
  return (
    <Box width="100vw">
      <Topbar
        title="Take a Photo of Your Safety Equipment"
        leftButtonText="HomeIcon"
      />
      <CameraView />
      <BottomNavBar />
    </Box>
  );
};

export default CaptureSafteyEquipmentScreen;
