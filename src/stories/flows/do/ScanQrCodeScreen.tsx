import { Topbar } from "../../Topbar";
import BottomNavBar from "../../BottomNavBar";

import { useNavigate } from "react-router-dom";

import { QrCodeScanner } from "../../QrCodeScanner";
import Paths from "../paths";

export function ScanQrCodeScreen() {
  const navigation = useNavigate();

  return (
    <>
      <Topbar title="Scan the QR Code on Your Product's Package" />
      <QrCodeScanner
        onScan={() => {
          void navigation(Paths.instructionBegin);
        }}
      />
      <BottomNavBar />
    </>
  );
}
