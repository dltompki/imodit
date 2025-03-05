import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Paths from "../paths";
import { Topbar } from "../../Topbar";

const TroubleshootingScreen: React.FC = () => {
  const navigate = useNavigate();

  // Fix ESLint warning by using a separate function
  const handleBackClick = () => {
    void navigate(Paths.stepThree);
  };

  return (
    <>
      <Topbar title="Troubleshooting" />
      <Box
        sx={{
          padding: 3,
          textAlign: "left",
          maxWidth: "600px",
          margin: "auto",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          So, You Messed Up Your Suspension Installation
        </Typography>

        {/* Troubleshooting Steps */}
        <Box sx={{ marginBottom: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            1. You Forgot to Remove the Shipping Blocks
          </Typography>
          <Typography variant="body1">
            Some new struts and coilovers come with plastic or rubber spacers to
            prevent movement during shipping. If you didn’t remove these, your
            suspension is effectively locked in place.
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            2. You Bought the Wrong Parts
          </Typography>
          <Typography variant="body1">
            Are you sure you got the right shocks and springs for your car? If
            you installed heavy-duty truck shocks on your sedan, or vice versa,
            your suspension might be completely out of spec.
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            3. You Installed Coil Springs Incorrectly
          </Typography>
          <Typography variant="body1">
            If your car uses coil springs, did you seat them properly in their
            perches? Misaligned springs can lock up the suspension, leading to a
            rough ride.
          </Typography>
        </Box>

        {/* Back Button */}
        <Button
          variant="outlined"
          color="primary"
          onClick={handleBackClick} // Use separate function
          sx={{ marginTop: 2 }}
        >
          Back to Validation
        </Button>
      </Box>
    </>
  );
};

export default TroubleshootingScreen;
