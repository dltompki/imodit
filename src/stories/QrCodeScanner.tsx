import { IDetectedBarcode, Scanner } from '@yudiel/react-qr-scanner';

export function QrCodeScanner() {
    function onScan(codes: IDetectedBarcode[]) {
        // TODO: Implement logic to handle scanned QR codes to go to 
        // new page or something
        console.log(codes);
    }

    return (
        <div>
            <Scanner onScan={onScan}/>
        </div>
    );
}