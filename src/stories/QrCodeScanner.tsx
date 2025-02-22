import { IDetectedBarcode, Scanner } from '@yudiel/react-qr-scanner';

export function QrCodeScanner() {
    function onScan(codes: IDetectedBarcode[]) {
        console.log(codes);
    }

    return (
        <div>
            <Scanner onScan={onScan}/>
        </div>
    );
}