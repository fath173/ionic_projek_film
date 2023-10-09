import { IonBackButton, IonButton, IonButtons, IonGrid, IonIcon, IonMenuButton, IonRow } from '@ionic/react';
import { add } from 'ionicons/icons';
import {
    IonContent,
    IonHeader,
    IonList,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    IonTitle,
    IonToolbar,
    useIonViewWillEnter
} from '@ionic/react';
import './Home.css';
import MovieList from '../components/MovieList';

const ViewMovie: React.FC = () => {

    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };

    return (
        <IonPage id="home-page">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Movie List</IonTitle>
                    <IonButtons slot="primary">
                        <IonButton fill="solid" color="primary" href={`/movie/input`}>
                            Add Movie
                            <IonIcon slot="start" icon={add}></IonIcon>
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">
                            Movie
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>

                {/* <IonList>
                    {<MovieList />}
                </IonList> */}
                <IonGrid>
                    <IonRow>
                        {<MovieList />}
                    </IonRow>
                </IonGrid>

            </IonContent>
        </IonPage>
    );
};

export default ViewMovie;
