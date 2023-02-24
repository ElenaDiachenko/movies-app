import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { createAuthSlice, AuthSlice } from './createAuthSlice';

export const useStore = create<AuthSlice>()(
  immer(
    devtools(
      persist(
        (...a) => ({
          ...createAuthSlice(...a),
        }),
        { name: 'state' }
      )
    )
  )
);
