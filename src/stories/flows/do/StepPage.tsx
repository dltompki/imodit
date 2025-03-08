import React from "react";
import { Topbar } from "../../Topbar";
import { Step } from "../../Step";
import BottomNavBar from "../../BottomNavBar";
import { Box } from "@mui/material";
import Pagination from "../../Pagination.tsx";
import { useNavigate } from "react-router-dom";

interface StepPageProps {
  title: string;
  image: string;
  caption: string;
  instructions: string;
  previous: string;
  next: string;
}

const StepPage: React.FC<StepPageProps> = (props: StepPageProps) => {
  const navigate = useNavigate();

  return (
    <>
      <Topbar title={props.title} leftButtonText="HomeIcon"/>
      <Step
        image={props.image}
        caption={props.caption}
        instructions={props.instructions}
      />
      {/* Pagination - Only show right button if `next` exists */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingX: 2,
          paddingTop: 5,
        }}
      >
        <Pagination
          onLeftButtonClick={() => void navigate(props.previous)}
          onRightButtonClick={() => void navigate(props.next)}
        />
      </Box>
      <BottomNavBar />
    </>
  );
};

export default StepPage;
