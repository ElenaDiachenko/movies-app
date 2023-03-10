import { StateCreator } from 'zustand';

import { auth, db } from 'config/firebase';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { IUser } from 'interfaces/IUser';
import { IFormRegisterValues } from 'components/Forms/RegisterForm/RegisterForm';
import { IFormLoginValues } from 'components/Forms/LoginForm/LoginForm';
import { MovieSlice } from './createMovieSlice';

export type AuthSlice = {
  authUser: IUser | null;
  loading: boolean;
  error: string | null;
  registerUser: (data: IFormRegisterValues) => void;
  loginUser: (data: IFormLoginValues) => void;
  logoutUser: () => void;
  setAuthUser: () => void;
};

export const createAuthSlice: StateCreator<
  AuthSlice & MovieSlice,
  [
    ['zustand/devtools', never],
    ['zustand/persist', unknown],
    ['zustand/immer', never]
  ],
  [],
  AuthSlice
> = set => ({
  authUser: null,
  loading: false,
  error: null,
  setAuthUser: async () => {
    set({ loading: true });
    try {
      await onAuthStateChanged(auth, currentUser => {
        if (currentUser?.email) {
          set({
            authUser: { email: currentUser.email },
            error: null,
          });
        }
      });
    } catch (error: any) {
      set({ error: error.message });
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },

  registerUser: async ({ name, email, password }) => {
    set({ loading: true });

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, 'users', email), {
        savedMovies: [],
      });
      const createdUser = auth.currentUser;
      if (createdUser?.email) {
        const payload = {
          email: createdUser.email,
        };

        set({ authUser: payload, error: null });
      }
    } catch (error: any) {
      set({ error: error.message });
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },

  loginUser: async ({ email, password }) => {
    set({ loading: true });

    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (auth.currentUser?.email) {
        set({
          authUser: { email: auth.currentUser.email },
          error: null,
        });
      }
    } catch (error: any) {
      set({ error: error.message });
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },

  logoutUser: async () => {
    set({ loading: true });
    try {
      await signOut(auth);
      set({ authUser: null, error: null, movies: [] });
    } catch (error: any) {
      set({ error: error.message });
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },
});
