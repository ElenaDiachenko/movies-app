import { StateCreator } from 'zustand';
// import { auth, db } from 'config/firebase';

// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
// } from 'firebase/auth';
// import { doc, setDoc } from 'firebase/firestore';
import { IUser } from 'interfaces/IUser';

export type AuthSlice = {
  authUser: IUser | null;
  pageLoading: boolean;
  setAuthUser: (user: IUser) => void;
  setPageLoading: (isLoading: boolean) => void;
};

export const createAuthSlice: StateCreator<
  AuthSlice,
  [],
  [],
  AuthSlice
> = set => ({
  authUser: null,
  pageLoading: false,
  setAuthUser: user => set(state => ({ ...state, authUser: user })),
  setPageLoading: isLoading =>
    set(state => ({ ...state, pageLoading: isLoading })),
});
