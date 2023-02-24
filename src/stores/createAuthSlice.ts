import { StateCreator } from 'zustand';
// import { immer } from 'zustand/middleware/immer';

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

export type AuthSlice = {
  authUser: IUser | null;
  loading: boolean;
  error: string | null;
  registerUser: (data: IFormRegisterValues) => void;
  setAuthUser: (user: IUser) => void;
  setLoading: (isLoading: boolean) => void;
};

export const createAuthSlice: StateCreator<
  AuthSlice,
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
  setAuthUser: user => set(state => (state.authUser = user)),

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

        set({ authUser: payload, loading: false, error: null });
      }
    } catch (error: any) {
      set({ error: error.message, loading: false });
      console.log(error);
    }
  },
  setLoading: isLoading => set(state => ({ ...state, loading: isLoading })),
});
