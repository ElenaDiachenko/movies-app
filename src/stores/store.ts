import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { createAuthSlice, AuthSlice } from './createAuthSlice';
import { createMovieSlice, MovieSlice } from './createMovieSlice';

export const useStore = create<AuthSlice & MovieSlice>()(
  immer(
    devtools(
      persist(
        (...a) => ({
          ...createAuthSlice(...a),
          ...createMovieSlice(...a),
        }),
        { name: 'state' }
      )
    )
  )
);

export type PersistState = {
  state: (AuthSlice & MovieSlice) | '';
};
