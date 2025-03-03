import { Box } from "@mui/material";
import BottomNavBar from "./BottomNavBar";
import { Topbar } from "./Topbar";
import { useNavigate, useParams } from "react-router-dom";

const mockCarData: CarWithSystem[] = [
  {
    id: "Toyota_Camry_2015",
    image: "/CarImages/toyota_camry.png",
    parts: ["Drivetrain", "Cooling System"],
  },
  {
    id: "Toyota_Crown_2012",
    image: "/CarImages/toyota_crown.png",
    parts: ["Drivetrain", "Cooling System"],
  },
  {
    id: "Toyota_Prius_2015",
    image: "/CarImages/toyota_prius.png",
    parts: ["Drivetrain", "Cooling System"],
  },
  {
    id: "Toyota_Corolla_2015",
    image: "/CarImages/toyota_corolla.png",
    parts: ["Drivetrain", "Cooling System"],
  },
];

interface CarWithSystem {
  id: string;
  image: string;
  parts: string[];
}

export const SystemSelectPage = () => {
  const { carId } = useParams();
  const navigation = useNavigate();
  const car = mockCarData.find((theCar) => theCar.id === carId);

  function mapButtons() {
    return car?.parts.map((value, index) => {
      return (
        <button
          key={index}
          onClick={() => {
            void navigation(
              `/learn/${carId}/${value.toLowerCase().replace(" ", "_")}`,
            );
          }}
          style={{
            position: "absolute",
            top: `${index == 0 ? "" : "35%"}`,
            bottom: `${index == 0 ? "35%" : ""}`,
            left: `${index == 0 ? "15%" : "10%"}`,
          }}
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
          void navigation(`/learn`);
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
          <img src={car?.image} width={375} height={187.5} />
          {mapButtons()}
        </Box>
      </Box>
      <BottomNavBar />
    </>
  );
};
