// MovieList.tsx
import React, { useState, useEffect } from 'react';
import { IonAlert, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from '@ionic/react';
import { trash, pencil, cameraOutline } from 'ionicons/icons';
import axios from 'axios';
import {
  IonCol,
  IonItem,
  IonLabel,
  IonNote,
  IonRow
} from '@ionic/react';

export interface Movie {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  original_language: string;
  poster_path: string;
}

function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const apiKey = '3099f49b7ba6c310e0a48ef3eb805464'; // Replace with your TMDb API key

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
          // `http://192.168.1.5:3000/films/`
        );
        // console.log(response);

        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [apiKey]);

  const [showAlert, setShowAlert] = useState(false);

  const showAlertFunction = () => {
    setShowAlert(true);
  };

  return (
    movies.map((movie) => (
      <>
        <IonCol key={movie.id} sizeXs="12" sizeSm="6" sizeMd="4" sizeLg="3">
          <IonCard >
            <img alt={`${movie.id}`} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <IonCardHeader>
              <IonCardTitle>{movie.title}</IonCardTitle>
              <IonCardSubtitle>{movie.release_date}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent> {movie.overview}</IonCardContent>
            <IonButton fill="clear" href={`/movie/edit/${movie.id}`}> <IonIcon slot="start" icon={pencil} color='secondary'></IonIcon></IonButton>
            <IonButton fill="clear" onClick={showAlertFunction}>  <IonIcon slot="start" icon={trash} color='danger'></IonIcon></IonButton>
          </IonCard>
        </IonCol>
        <IonAlert key={movie.id}
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="Warning!!!"
          message={`Remove: ${movie.title}`}
          buttons={['OK', 'Cancel']}
        />
      </>
    ))
  );
}

export default MovieList;
