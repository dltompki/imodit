import React from "react";
import { Topbar } from "../../Topbar";
import { Step } from "../../Step";
import BottomNavBar from "../../BottomNavBar";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

interface StepPageProps {
  title: string;
  image: string;
  caption: string;
  instructions: string;
  previous: string;
  next: string;
}

const StepPage: React.FC<StepPageProps> = (props: StepPageProps) => {
  return (
    <>
      <Topbar title={props.title} />
      <Step
        image={props.image}
        caption={props.caption}
        instructions={props.instructions}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingX: "2%",
        }}
      >
        <Button component={Link} to={props.previous} variant="outlined">
          Previous
        </Button>
        <Button component={Link} to={props.next} variant="outlined">
          Next
        </Button>
      </Box>
      <BottomNavBar />
    </>
  );
};

export default StepPage;
