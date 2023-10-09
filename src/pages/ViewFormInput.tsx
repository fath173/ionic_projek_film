// src/App.tsx
import React from 'react';
// import '../App.css';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import { FormInput } from '../components/FormInput';

const ViewFormInput: React.FC = () => {

    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Form Input Movie</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                <FormInput />
            </IonCardContent>
        </IonCard>
    );
}

export default ViewFormInput;
