import React, { useState } from "react";
import { Button, Typography, TextField, Box } from "@mui/material";
import { Rating } from "@mui/material";

const RatingFeedbackPage: React.FC = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        padding: 2,
        textAlign: "center",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          marginTop: 3,
          marginBottom: 2,
          fontSize: { xs: "1.5rem", sm: "2rem" }, // Responsive
        }}
      >
        Rate your experience!
      </Typography>

      {/* Recommendation Question */}
      <Typography
        variant="h6"
        sx={{
          marginBottom: 1,
          fontSize: { xs: "1rem", sm: "1.25rem" }, // Responsive
        }}
      >
        How would you rate <br /> this set of instructions?
      </Typography>

      {/* Rating Stars */}
      <Box sx={{ marginBottom: 3 }}>
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
        fullWidth
        multiline
        rows={4}
        placeholder="Ex: My experience for following this..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        sx={{
          marginBottom: 3,
          maxWidth: "400px",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
        }}
      />

      <Box sx={{ display: "flex" }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ width: "180px" }}
          onClick={() => alert("Feedback submitted!")}
        >
          Submit Feedback
        </Button>
      </Box>
    </Box>
  );
};

export default RatingFeedbackPage;
