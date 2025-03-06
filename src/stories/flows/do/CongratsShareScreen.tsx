import React from "react";
import { Button, Typography, Box, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import ShareIcon from "@mui/icons-material/Share";
import confettiImg from "../../assets/confetti_white_background.png";
import { Topbar } from "../../Topbar.tsx";
import Pagination from "../../Pagination.tsx";
import { useNavigate } from "react-router-dom";
import Paths from "../paths.ts";

const CongratsShareScreen: React.FC = () => {
  const navigation = useNavigate();

  const handleLeftClick = () => {
    void navigation(Paths.stepThree);
  };

  const handleRightClick = () => {
    void navigation(Paths.rate);
  };

  const handleSkip = () => {
    void navigation(Paths.rate); // You can replace this with any desired path
  };

  return (
    <>
      <Topbar title="End of Instructions" />

      <Box
        sx={{
          textAlign: "center",
          maxHeight: "100vh",
          minWidth: "90%",
          maxWidth: "100vw",
          overflow: "hidden",
        }}
      >
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
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, // Responsive sizing
          }}
        >
          Congratulations!
        </Typography>

        {/* Completion Message */}
        <Typography
          variant="h6"
          sx={{
            color: "text",
            marginTop: 1,
            fontSize: { xs: "1.4rem", sm: "1.25rem", md: "1.5rem" }, // Responsive sizing
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
            fontSize: { xs: "1.2rem", sm: "2rem", md: "1.5rem" }, // Responsive sizing
          }}
        >
          Did you find the instructions helpful?
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "text",
            marginTop: 0.5,
            fontSize: { xs: "1.2rem", sm: "1.25rem", md: "1.5rem" }, // Responsive sizing
          }}
        >
          Share it with your friends!
        </Typography>

        {/* Social Share Buttons */}
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <IconButton color="primary" aria-label="facebook">
            <FacebookIcon />
          </IconButton>
          <IconButton color="primary" aria-label="instagram">
            <InstagramIcon />
          </IconButton>
          <IconButton color="primary" aria-label="x">
            <XIcon />
          </IconButton>
          <IconButton color="primary" aria-label="share">
            <ShareIcon />
          </IconButton>
        </Box>

        {/* Skip Button */}
        <Button
          variant="text"
          color="primary"
          onClick={handleSkip}
          sx={{ margin: 1 }}
        >
          Skip
        </Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingX: 2,
            width: "362px",
          }}
        >
          <Pagination
            onLeftButtonClick={handleLeftClick}
            onRightButtonClick={handleRightClick}
          />
        </Box>
      </Box>
    </>
  );
};

export default CongratsShareScreen;
