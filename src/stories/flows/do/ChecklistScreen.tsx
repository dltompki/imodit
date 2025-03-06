import React from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Paths from "../paths";
import { Topbar } from "../../Topbar";
import Pagination from "../../Pagination";
import Checklist from "../../Checklist";

const requiredTools = [
  "Socket Set",
  "Pliers",
  "Screwdriver Set",
  "Jack and Jack Stands",
  "Torque Wrench",
];

const ChecklistScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Topbar title="Required Tools" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          justifyContent: "center",
          height: "75vh",
          textAlign: "left",
          padding: 2,
          maxWidth: "100vw",
          minWidth: "90vw",
          overflowX: "hidden",
        }}
      >
        {/* Checklist Component */}
        <Checklist header="Tool Checklist" items={requiredTools} />
      </Box>

      {/* Pagination for navigation */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingX: 2,
          marginBottom: 2,
        }}
      >
        <Pagination
          onLeftButtonClick={() => void navigate(Paths.instructionSaftey)}
          onRightButtonClick={() => void navigate(Paths.stepOne)}
        />
      </Box>
    </>
  );
};

export default ChecklistScreen;
