import { Box } from "@mui/material";
import BottomNavBar from "./BottomNavBar";
import { Topbar } from "./Topbar";
import { useNavigate, useParams } from "react-router-dom";

const mockSystemData: SystemParts[] = [
  {
    id: "drivetrain",
    subsystems: ["Driveshaft"],
    image: "/Drivetrain.png",
  },
  {
    id: "cooling_system",
    subsystems: ["Radiator"],
    image: "/Cooling_system.png",
  },
];

interface SystemParts {
  id: string;
  subsystems: string[];
  image: string;
}

export const SubsystemSelectPage = () => {
  const { carId, systemId } = useParams();
  const navigation = useNavigate();
  const subsystem = mockSystemData.find((thePart) => thePart.id === systemId);

  function mapButtons() {
    return subsystem?.subsystems.map((value, index) => {
      return (
        <button
          key={index}
          onClick={() => {
            void navigation(
              `/learn/${carId}/${systemId}/${value.toLowerCase()}`,
            );
          }}
          style={{ position: "absolute", top: "40%", left: "10%" }}
        >
          {value}
        </button>
      );
    });
  }

  return (
    <>
      <Topbar
        title="Learn"
        leftButtonAction={() => {
          void navigation(`/learn/${carId}`);
        }}
        leftButtonText="BackIcon"
      ></Topbar>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <Box sx={{ width: "100%", height: "11dvh" }} />
        <Box
          sx={{
            width: "100%",
            height: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={subsystem?.image} width={375} height={187.5} />
          {mapButtons()}
        </Box>
      </Box>
      <BottomNavBar />
    </>
  );
};
