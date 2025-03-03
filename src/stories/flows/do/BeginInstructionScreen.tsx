import { Box, Button } from "@mui/material";
import BottomNavBar from "../../BottomNavBar";
import { Topbar } from "../../Topbar";

const BeginInstructionScreen: React.FC = () => {
  return (
    <>
      <Topbar title="Start Installing Suspension" />
      <Box sx={{ justifyContent: "center" }}>
        <Box
          component="img"
          src="https://www.freeiconspng.com/uploads/suspension-icon-png-0.png"
          sx={{ width: "100%" }}
        />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" sx={{ paddingX: "auto" }}>
            Begin
          </Button>
        </Box>
      </Box>
      <BottomNavBar />
    </>
  );
};

export default BeginInstructionScreen;
