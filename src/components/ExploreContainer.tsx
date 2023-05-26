import { IonButton } from "@ionic/react";
import "./ExploreContainer.css";
import { BarcodeScanner } from "@capacitor-community/barcode-scanner";
interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const scanQRCode = async () => {
    const result = await BarcodeScanner.startScan();

    if (result.hasContent) {
      // Handle the scanned QR code data
      console.log("QR code data:", result.content);
    }
  };
  return (
    <div className="container">
      <strong>Ready to create an app?</strong>
      <IonButton onClick={scanQRCode}>Click Here To Scan</IonButton>
    </div>
  );
};

export default ExploreContainer;
