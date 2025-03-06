import React, { useState } from "react";
import { Button, Typography, TextField, Box, Snackbar } from "@mui/material";
import { Rating } from "@mui/material";
import BottomNavBar from "../../BottomNavBar";
import { Topbar } from "../../Topbar";
import Pagination from "../../Pagination.tsx";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import Paths from "../paths.ts";

const RatingFeedbackScreen: React.FC = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");
  const [isFeedbackSubmitted, setIsFeedbackSubmitted] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const navigation = useNavigate();

  const handleLeftClick = () => {
    void navigation(Paths.endOfInstruction);
  };

  const handleRightClick = () => {
    void navigation("/");
  };

  const handleSubmit = () => {
    if (feedback.trim() === "") {
      setSnackbarMessage("Please enter feedback before submitting!"); // Show error message in Snackbar
      return;
    }

    setIsFeedbackSubmitted(true); // Disable the button after submission
    setSnackbarMessage("Feedback Submitted!"); // Set the message to be shown in the Snackbar
  };

  const handleCloseSnackbar = () => {
    setSnackbarMessage(""); // Close the Snackbar
  };

  return (
    <>
      <Topbar title="Rate your Experience" />

      <Box
        sx={{
          textAlign: "center",
          width: "100vw",
          maxWidth: "100%",
          maxHeight: "89vh",
          verticalAlign: "center",
          horizontalAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            paddingTop: 15,
            marginBottom: 3,
            fontSize: { xs: "2rem", sm: "2rem" }, // Responsive
          }}
        >
          Rate your experience!
        </Typography>

        {/* Recommendation Question */}
        <Typography
          variant="h6"
          sx={{
            marginBottom: 2,
            fontSize: { xs: "1.5rem", sm: "1.25rem" }, // Responsive
          }}
        >
          How would you rate <br /> this set of instructions?
        </Typography>

        {/* Rating Stars */}
        <Box sx={{ marginBottom: 5 }}>
          <Rating
            value={rating}
            onChange={(_event, newValue) => setRating(newValue)}
            size="large"
            precision={0.5}
          />
        </Box>

        {/* Feedback Input */}
        <TextField
          label="Additional Feedback"
          variant="outlined"
          multiline
          rows={4}
          placeholder="Ex: My experience for following this..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          sx={{
            marginBottom: 2,
            maxWidth: "400px",
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
            minWidth: "280px",
          }}
          disabled={isFeedbackSubmitted} // Disable feedback field after submission
        />

        {/* Submit Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginBottom: 4,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "180px" }}
            onClick={handleSubmit}
            disabled={isFeedbackSubmitted} // Disable button after submission
          >
            {isFeedbackSubmitted ? "Feedback Received" : "Submit Feedback"}
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingX: 2,
            marginTop: 15,
            width: "362px",
          }}
        >
          <Pagination
            rightButton={
              <Button variant="contained" startIcon={<HomeIcon />}>
                {" "}
                Home{" "}
              </Button>
            }
            onLeftButtonClick={handleLeftClick}
            onRightButtonClick={handleRightClick}
          />
        </Box>
      </Box>

      {/* Snackbar for feedback submission */}
      <Snackbar
        open={snackbarMessage !== ""} // Show snackbar if message is not empty
        onClose={handleCloseSnackbar}
        autoHideDuration={3000}
        message={snackbarMessage}
      />
      <BottomNavBar />
    </>
  );
};

export default RatingFeedbackScreen;
