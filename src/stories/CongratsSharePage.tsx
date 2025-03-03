import React from "react";
import { Button, Typography, Box, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import ShareIcon from "@mui/icons-material/Share";
import confettiImg from "./assets/confetti_white_background.png";

const CongratsSharePage: React.FC = () => {
  return (
    <Box sx={{ textAlign: "center", maxWidth: "100%", padding: 2 }}>
      {/* Confetti Image */}
      <Box sx={{ textAlign: "center" }}>
        <img
          src={confettiImg}
          alt="Confetti"
          style={{
            width: "100%",
            maxHeight: "500px",
            objectFit: "contain",
          }}
        />
      </Box>

      {/* Congratulations Heading */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "1.7rem", sm: "2.5rem", md: "3rem" }, // Responsive sizing
        }}
      >
        Congratulations!
      </Typography>

      {/* Completion Message */}
      <Typography
        variant="h6"
        sx={{
          color: "text.secondary",
          marginTop: 1,
          fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" }, // Responsive sizing
        }}
      >
        You’ve completed all the steps!
      </Typography>

      {/* Share Instructions */}
      <Typography
        variant="h6"
        sx={{
          color: "text",
          marginTop: 2.5,
          fontSize: { xs: "0.9rem", sm: "2rem", md: "1.5rem" }, // Responsive sizing
        }}
      >
        Did you find this instruction helpful?
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "text",
          marginTop: 0.5,
          fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" }, // Responsive sizing
        }}
      >
        Share it with your friends!
      </Typography>

      {/* Social Share Buttons */}
      <Box
        sx={{ marginTop: 2, display: "flex", justifyContent: "center", gap: 2 }}
      >
        <IconButton color="primary" aria-label="facebook">
          <FacebookIcon />
        </IconButton>
        <IconButton color="primary" aria-label="instagram">
          <InstagramIcon />
        </IconButton>
        <IconButton color="primary" aria-label="twitter">
          <TwitterIcon />
        </IconButton>
        <IconButton color="primary" aria-label="share">
          <ShareIcon />
        </IconButton>
      </Box>

      {/* Skip Button */}
      <Button variant="text" color="primary" sx={{ marginTop: 1 }}>
        Skip
      </Button>
    </Box>
  );
};

export default CongratsSharePage;
