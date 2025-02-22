import { QrReader } from "@fjhonda/react-qr-reader";
import { Result } from '@zxing/library';


export function QrCodeScanner() {
    function onScan(result: Result | null | undefined, _error: any) {
        if (result) {
            console.log(result.getText());
            // TODO: go to the right page

        }
    }

    return (
        <div>
            <QrReader onResult={onScan}/>
        </div>
    );
}