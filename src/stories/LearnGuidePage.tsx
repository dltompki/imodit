import { Box, Button } from "@mui/material";
import BottomNavBar from "./BottomNavBar";
import { Step } from "./Step";
import { Topbar } from "./Topbar";
import { useRef, useState } from "react";
import { ArrowForwardIos } from "@mui/icons-material";
import { LearnFeedback } from "./LearnFeedback";

const mockGuide: Guide[] = [
  {
    image: "/Driveshaft.png",
    info: "The driveshaft, a seemingly simple tube of metal, plays a critical role in propelling many vehicles forward. In rear-wheel-drive cars and trucks, it's the vital link between the transmission and the rear axle. This rotating shaft transmits the engine's power, the very force that sets the wheels in motion. Its design incorporates universal joints, or sometimes constant velocity (CV) joints, at each end, allowing it to flex and adjust as the rear axle moves up and down with the suspension.",
    title: "Driveshaft",
  },
  {
    image: "/Driveshaft.png",
    info: "The term driveshaft first appeared during the mid-19th century. In Stover's 1861 patent reissue for a planing and matching machine, the term is used to refer to the belt-driven shaft by which the machine is driven",
    title: "Driveshaft",
  },
];

interface Guide {
  image: string;
  info: string;
  title: string;
}

export const LearnGuidePage = () => {
  const guide = useRef(mockGuide);
  const [page, setPage] = useState(0);
  const [feedback, setFeedback] = useState(false);

  function handleNextPage() {
    if (page + 1 != mockGuide.length) {
      setPage(page + 1);
    } else {
      setFeedback(true);
    }
  }

  function handlePreviousPage() {
    if (page - 1 != -1) {
      setFeedback(false);
      setPage(page - 1);
    }
  }

  return (
    <>
      {/* TODO: still need to navigate back to the other parts page */}
      <Topbar
        title="Learn"
        leftButtonText="BackIcon"
        leftButtonAction={page == 0 ? () => {} : handlePreviousPage}
      ></Topbar>
      <Box
        sx={{
          height: "80dvh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            height: "90dvh",
            flexDirection: "column",
            overflowY: "scroll",
            scrollbarWidth: "none",
            display: feedback ? "none" : "flex",
          }}
        >
          <Step
            image={guide.current[page].image}
            instructions={guide.current[page].info}
            caption=""
            title={guide.current[page].title}
          />
        </Box>
        <LearnFeedback visible={feedback} />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Button
          onClick={handleNextPage}
          sx={{ alignSelf: "end", color: "black", borderColor: "black" }}
          variant="outlined"
          endIcon={<ArrowForwardIos></ArrowForwardIos>}
        >
          Next
        </Button>
      </Box>

      <BottomNavBar></BottomNavBar>
    </>
  );
};
