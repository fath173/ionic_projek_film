import { useEffect, useState } from 'react';
import { Message, getMessage } from '../data/messages';
import {
    IonBackButton,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonNote,
    IonPage,
    IonToolbar,
    useIonViewWillEnter,
} from '@ionic/react';
import { personCircle, save } from 'ionicons/icons';
import { useParams } from 'react-router';
import './ViewMessage.css';
import axios from 'axios';
import { Movie } from '../components/MovieList';

function ViewMovieEdit() {
    const params = useParams<{ id: string }>();

    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        // Define your MovieDB API key and base URL
        const apiKey = '3099f49b7ba6c310e0a48ef3eb805464';
        const baseUrl = 'https://api.themoviedb.org/3';

        // Make the API request to get movie details by ID
        axios
            .get(`${baseUrl}/movie/${params.id}`, {
                params: {
                    api_key: apiKey,
                },
            })
            .then((response) => {
                setMovie(response.data);
            })
            .catch((error) => {
                console.error('Error fetching movie details:', error);
            });
    }, [params.id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <IonPage id="view-message-page">
            <IonHeader translucent>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton text="Form Edit" defaultHref="/movie"></IonBackButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Form Input Movie</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>

                        <IonItem>
                            <IonLabel position="floating">Title</IonLabel>
                            <IonInput
                                type="text"
                                name="title"
                                value={movie.title}
                            ></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Release Date</IonLabel>
                            <IonInput
                                type="text"
                                name="release_date"
                                value={movie.release_date}
                            ></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Original Language</IonLabel>
                            <IonInput
                                type="text"
                                name="original_language"
                                value={movie.original_language}
                            ></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Overview</IonLabel>
                            <IonInput
                                type="text"
                                name="overview"
                                value={movie.overview}
                            ></IonInput>
                        </IonItem>


                        <IonButton type="submit">
                            Update
                            <IonIcon slot="start" icon={save}></IonIcon>
                        </IonButton>

                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
}

export default ViewMovieEdit;
