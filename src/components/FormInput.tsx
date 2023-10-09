import React, { useState } from 'react';
import { IonInput, IonButton, IonItem, IonLabel, IonIcon } from '@ionic/react';
import { save } from 'ionicons/icons';
import { useHistory } from 'react-router';
export const FormInput: React.FC = () => {
    const [formData, setFormData] = useState({
        title: '',
        release_date: '',
        overview: '',
        original_language: '',
    });

    const handleChange = (e: CustomEvent) => {
        const { name, value } = e.detail;
        setFormData({ ...formData, [name]: value });
    };


    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // Kirim formData ke API menggunakan permintaan fetch atau Axios di sini
            const response = await fetch('URL_API_ANDA', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Data formulir berhasil dikirim.');
                // Atur ulang formulir atau lakukan tindakan lain setelah pengiriman berhasil
            } else {
                console.error('Pengiriman data formulir gagal.');
            }
        } catch (error) {
            console.error('Kesalahan pengiriman data formulir:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>

            <IonItem>
                <IonLabel position="floating">Title</IonLabel>
                <IonInput
                    type="text"
                    name="title"
                    value={formData.title}
                    onIonChange={handleChange}
                ></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Release Date</IonLabel>
                <IonInput
                    type="text"
                    name="release_date"
                    value={formData.release_date}
                    onIonChange={handleChange}
                ></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Original Language</IonLabel>
                <IonInput
                    type="text"
                    name="original_language"
                    value={formData.original_language}
                    onIonChange={handleChange}
                ></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Overview</IonLabel>
                <IonInput
                    type="text"
                    name="overview"
                    value={formData.overview}
                    onIonChange={handleChange}
                ></IonInput>
            </IonItem>

            <IonButton type="submit" color={'medium'} onClick={goBack}>
                Back
            </IonButton>
            <IonButton type="submit">
                Save
                <IonIcon slot="start" icon={save}></IonIcon>
            </IonButton>
        </form>
    );
};
