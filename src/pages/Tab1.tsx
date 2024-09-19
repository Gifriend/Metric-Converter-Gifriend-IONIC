import { IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonSelect, IonSelectOption } from '@ionic/react';
import { useState } from 'react';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [value, setValue] = useState<number | ''>('');
  const [unitFrom, setUnitFrom] = useState<string>('meter');
  const [unitTo, setUnitTo] = useState<string>('kilometer');
  const [result, setResult] = useState<number | null>(null);

  const units = [
    { label: 'Meter', value: 'meter' },
    { label: 'Kilometer', value: 'kilometer' },
    { label: 'Centimeter', value: 'centimeter' },
    // Add more units as needed
  ];

  const convert = () => {
    // Basic conversion logic for demonstration
    if (unitFrom === unitTo) {
      setResult(value || 0);
    } else if (unitFrom === 'meter' && unitTo === 'kilometer') {
      setResult((value || 0) / 1000);
    } else if (unitFrom === 'kilometer' && unitTo === 'meter') {
      setResult((value || 0) * 1000);
    }
    // Add more conversion logic as needed
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
        <div className="converter-container">
          <IonItem>
            <IonLabel position="floating">Value</IonLabel>
            <IonInput
              type="number"
              value={value}
              onIonChange={(e: CustomEvent) => setValue(parseFloat((e.detail as any).value))}
            />
          </IonItem>
          <IonItem>
            <IonLabel>From</IonLabel>
            <IonSelect value={unitFrom} onIonChange={(e: CustomEvent) => setUnitFrom(e.detail.value as string)}>
              {units.map(unit => (
                <IonSelectOption key={unit.value} value={unit.value}>{unit.label}</IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>To</IonLabel>
            <IonSelect value={unitTo} onIonChange={(e: CustomEvent) => setUnitTo(e.detail.value as string)}>
              {units.map(unit => (
                <IonSelectOption key={unit.value} value={unit.value}>{unit.label}</IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonButton expand="full" onClick={convert}>Convert</IonButton>
          </IonItem>
          {result !== null && (
            <IonItem>
              <IonLabel>Result: {result}</IonLabel>
            </IonItem>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
