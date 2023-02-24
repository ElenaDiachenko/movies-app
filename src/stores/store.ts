import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { createAuthSlice, AuthSlice } from './createAuthSlice';

export const useStore = create<AuthSlice>()(
  devtools(
    immer(
      persist(
        (...a) => ({
          ...createAuthSlice(...a),
        }),
        { name: 'state' }
      )
    )
  )
);
