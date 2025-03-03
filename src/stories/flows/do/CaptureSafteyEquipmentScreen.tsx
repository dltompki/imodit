import React from "react";
import { Topbar } from "../../Topbar";
import { CameraView } from "../../CameraView";
import BottomNavBar from "../../BottomNavBar";

const CaptureSafteyEquipmentScreen: React.FC = () => {
  return (
    <>
      <Topbar title="Take a Photo of Your Safety Equipment" />
      <CameraView />
      <BottomNavBar />
    </>
  );
};

export default CaptureSafteyEquipmentScreen;
