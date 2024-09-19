import { IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonSelect, IonSelectOption } from '@ionic/react';
import { useState } from 'react';
import './Tab3.css';

const Tab3: React.FC = () => {
  const [value, setValue] = useState<number | ''>('');
  const [unitFrom, setUnitFrom] = useState<string>('gram');
  const [unitTo, setUnitTo] = useState<string>('kilogram');
  const [result, setResult] = useState<number | null>(null);

  const units = [
    { label: 'Gram', value: 'gram' },
    { label: 'Kilogram', value: 'kilogram' },
    { label: 'Ounce', value: 'ounce' },
  ];

  const convert = () => {
    let convertedValue: number | null = null;
    if (unitFrom === unitTo) {
      convertedValue = value || 0;
    } else if (unitFrom === 'gram' && unitTo === 'kilogram') {
      convertedValue = (value || 0) / 1000;
    } else if (unitFrom === 'kilogram' && unitTo === 'gram') {
      convertedValue = (value || 0) * 1000;
    } else if (unitFrom === 'ounce' && unitTo === 'gram') {
      convertedValue = (value || 0) * 28.3495;
    } else if (unitFrom === 'gram' && unitTo === 'ounce') {
      convertedValue = (value || 0) / 28.3495;
    }
    setResult(convertedValue);
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
            <IonTitle size="large">Mass Converter</IonTitle>
          </IonToolbar>
        </IonHeader>
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
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
