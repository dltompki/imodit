import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Paths from "../paths";
import { Topbar } from "../../Topbar";
import Pagination from "../../Pagination";

const StepValidationScreen: React.FC = () => {
  const navigate = useNavigate();

  // Navigation handlers
  const handleYesClick = () => {
    void navigate(Paths.endOfInstruction); // Goes to Congrats page
  };

  const handleNoClick = () => {
    void navigate(Paths.troubleshooting); // Goes to Troubleshooting
  };

  const handlePrevClick = () => {
    void navigate(Paths.stepTwo); // Goes back to Step 2
  };

  return (
    <>
      <Topbar title="Step 3: Validate your System" leftButtonText="HomeIcon" />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "75vh",
          textAlign: "center",
          padding: 2,
          maxWidth: "400px",
          margin: "auto",
        }}
      >
        {/* Instruction Text */}
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Get on top of the hood of the car and jump
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 4 }}>
          Does the car bounce?
        </Typography>

        {/* Yes / No Buttons */}
        <Box sx={{ display: "flex", gap: 2, marginBottom: 3 }}>
          <button
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
            onClick={handleYesClick}
          >
            Yes
          </button>
          <button
            style={{
              backgroundColor: "#F44336",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
            onClick={handleNoClick}
          >
            No
          </button>
        </Box>
      </Box>

      {/* Pagination with only the Left Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingX: 2,
          marginBottom: 2,
        }}
      >
        <Pagination rightButton={null} onLeftButtonClick={handlePrevClick} />
      </Box>
    </>
  );
};

export default StepValidationScreen;
