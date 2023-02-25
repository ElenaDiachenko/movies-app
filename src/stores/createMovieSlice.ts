import { StateCreator } from 'zustand';
import { AuthSlice } from './createAuthSlice';

import { ISavedMovieData } from 'interfaces/ISavedMovieData';
import { db } from 'config/firebase';
import {
  updateDoc,
  doc,
  onSnapshot,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';

export type MovieSlice = {
  movies: ISavedMovieData[] | [];
  loadingMovies: boolean;
  errorMovies: string | null;
  setSavedMovies: () => void;
  addSavedMovie: (id: number, title: string, poster_path: string) => void;
  deleteSavedMovie: (movie: ISavedMovieData) => void;
};

export const createMovieSlice: StateCreator<
  MovieSlice & AuthSlice,
  [
    ['zustand/devtools', never],
    ['zustand/persist', unknown],
    ['zustand/immer', never]
  ],
  [],
  MovieSlice
> = (set, get) => ({
  movies: [],
  loadingMovies: false,
  errorMovies: null,

  setSavedMovies: async () => {
    set({ loadingMovies: true });
    try {
      const { authUser } = get();
      onSnapshot(doc(db, 'users', `${authUser?.email}`), doc => {
        set({
          movies: doc.data()?.savedMovies,
          loadingMovies: false,
          errorMovies: null,
        });
      });
    } catch (errorMovies: any) {
      set({ errorMovies: errorMovies.message, loadingMovies: false });
      console.log(errorMovies);
    }
  },
  addSavedMovie: async (id, title, poster_path) => {
    set({ loadingMovies: true });
    try {
      const { authUser, movies } = get();
      const movieID = doc(db, 'users', `${authUser?.email}`);

      await updateDoc(movieID, {
        savedMovies: arrayUnion({
          id,
          title,
          img: poster_path,
        }),
      });

      set({
        movies: [...movies, { id, title, img: poster_path }],
        loadingMovies: false,
        errorMovies: null,
      });
    } catch (errorMovies: any) {
      set({ errorMovies: errorMovies.message, loadingMovies: false });
      console.log(errorMovies);
    }
  },
  deleteSavedMovie: async movie => {
    set({ loadingMovies: true });
    try {
      const { authUser, movies } = get();
      const docRef = doc(db, 'users', `${authUser?.email}`);

      await updateDoc(docRef, {
        savedMovies: arrayRemove(movie),
      });

      set({
        movies: movies.filter(it => it.id !== movie.id),
        loadingMovies: false,
        errorMovies: null,
      });
    } catch (errorMovies: any) {
      set({ errorMovies: errorMovies.message, loadingMovies: false });
      console.log(errorMovies);
    }
  },
});
