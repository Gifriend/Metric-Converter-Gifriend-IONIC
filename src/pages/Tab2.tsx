import { IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/react';
import { useState } from 'react';
import './Tab2.css';

const Tab2: React.FC = () => {
  const [celsius, setCelsius] = useState<number | ''>('');
  const [fahrenheit, setFahrenheit] = useState<number | null>(null);

  const convertToFahrenheit = () => {
    if (typeof celsius === 'number') {
      setFahrenheit((celsius * 9/5) + 32);
    } else {
      setFahrenheit(null);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size='large'>Metric Converter</IonTitle>
          <IonTitle size='small'>By: Gifriend Yedija Talumingan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Celsius to Fahrenheit</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonLabel position="floating">Celsius</IonLabel>
          <IonInput
            type="number"
            value={celsius}
            onIonChange={(e: CustomEvent) => setCelsius(parseFloat((e.detail as any).value))}
          />
        </IonItem>
        <IonItem>
          <IonButton expand="full" onClick={convertToFahrenheit}>Convert to Fahrenheit</IonButton>
        </IonItem>
        {fahrenheit !== null && (
          <IonItem>
            <IonLabel>Fahrenheit: {fahrenheit}</IonLabel>
          </IonItem>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
