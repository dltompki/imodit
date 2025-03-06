import { Topbar } from "../../Topbar";
import BottomNavBar from "../../BottomNavBar";

import { useNavigate } from "react-router-dom";

import { QrCodeScanner } from "../../QrCodeScanner";
import Paths from "../paths";
import { Box } from "@mui/material";

export function ScanQrCodeScreen() {
  const navigation = useNavigate();

  return (
    <>
      <Topbar title="Scan the QR Code on Your Product's Package" />
      <Box
        sx={{
          flexGrow: 1,
          width: "100vw",
          alignItems: "center",
          height: "100vw",
        }}
      >
        <QrCodeScanner
          onScan={() => {
            void navigation(Paths.instructionBegin);
          }}
        />
      </Box>
      <BottomNavBar />
    </>
  );
}
