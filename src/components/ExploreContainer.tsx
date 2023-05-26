import { IonButton } from "@ionic/react";
import "./ExploreContainer.css";
import { BarcodeScanner } from "@capacitor-community/barcode-scanner";
interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const scanQRCode = async () => {
    await BarcodeScanner.checkPermission({ force: true });

    // make background of WebView transparent
    // note: if you are using ionic this might not be enough, check below
    BarcodeScanner.hideBackground();

    const result = await BarcodeScanner.startScan();

    if (result.hasContent) {
      console.log("QR code data:", result.content);
    }
  };

  const stopScan = () => {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
  };

  return (
    <div className="container">
      <strong>Ready to create an app?</strong>
      <IonButton onClick={scanQRCode}>Click Here To Scan</IonButton>
      <IonButton onClick={stopScan}>Stop Scan</IonButton>
    </div>
  );
};

export default ExploreContainer;
