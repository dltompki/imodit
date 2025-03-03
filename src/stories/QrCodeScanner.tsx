import { IDetectedBarcode, Scanner } from "@yudiel/react-qr-scanner";

interface QrCodeScannerProps {
  onScan: (detectedCodes: IDetectedBarcode[]) => void;
}

export function QrCodeScanner(props: QrCodeScannerProps) {
  return <Scanner onScan={props.onScan} />;
}
