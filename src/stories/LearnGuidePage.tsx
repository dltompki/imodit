import { Box, Button } from "@mui/material";
import BottomNavBar from "./BottomNavBar";
import { Step } from "./Step";
import { Topbar } from "./Topbar";
import { useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { LearnFeedback } from "./LearnFeedback";
import { useNavigate, useParams } from "react-router-dom";

const mockDriveshaftInfo: Guide[] = [
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

const mockRadiatorInfo: Guide[] = [
  {
    image: "/Radiator.png",
    info: "Radiators are heat exchangers used for cooling internal combustion engines, mainly in automobiles but also in piston-engined aircraft, railway locomotives, motorcycles, stationary generating plants or any similar use of such an engine.",
    title: "Radiator",
  },
  {
    image: "/Radiator.png",
    info: "Internal combustion engines are often cooled by circulating a liquid called engine coolant through the engine block and cylinder head where it is heated, then through a radiator where it loses heat to the atmosphere, and then returned to the engine. Engine coolant is usually water-based, but may also be oil. It is common to employ a water pump to force the engine coolant to circulate, and also for an axial fan to force air through the radiator.",
    title: "Radiator",
  },
];

interface subsystemParts {
  id: string;
  partInfo: Guide[];
}

interface Guide {
  image: string;
  info: string;
  title: string;
}

const subSystemParts: subsystemParts[] = [
  { id: "driveshaft", partInfo: mockDriveshaftInfo },
  { id: "radiator", partInfo: mockRadiatorInfo },
];

export const LearnGuidePage = () => {
  const navigation = useNavigate();
  const { carId, systemId, subsystemId } = useParams();
  const guide = subSystemParts.find((part) => {
    return part.id == subsystemId;
  });
  const [page, setPage] = useState(0);
  const [feedback, setFeedback] = useState(false);

  function handleNextPage() {
    if (page + 1 != guide?.partInfo.length) {
      setPage(page + 1);
    } else {
      if (feedback) {
        void navigation(`/learn/${carId}/${systemId}`);
        return;
      }
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
      <Topbar title="Learn" leftButtonText="HomeIcon"></Topbar>
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
            image={guide?.partInfo[page].image}
            instructions={guide?.partInfo[page].info}
            caption=""
            title={guide?.partInfo[page].title}
          />
        </Box>
        <LearnFeedback visible={feedback} />
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", pl: 2, pr: 2 }}
      >
        <Button
          onClick={
            page == 0
              ? () => {
                  void navigation(`/learn/${carId}/${systemId}`);
                }
              : handlePreviousPage
          }
          variant="outlined"
          sx={{ color: "black", borderColor: "black" }}
          startIcon={<ArrowBackIosNewIcon></ArrowBackIosNewIcon>}
        >
          Prev
        </Button>
        <Button
          onClick={handleNextPage}
          sx={{ color: "black", borderColor: "black" }}
          variant="outlined"
          endIcon={<ArrowForwardIosIcon></ArrowForwardIosIcon>}
        >
          {feedback ? "Finish" : "Next"}
        </Button>
      </Box>

      <BottomNavBar></BottomNavBar>
    </>
  );
};
