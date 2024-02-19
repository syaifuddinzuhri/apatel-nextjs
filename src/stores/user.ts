/* eslint-disable import/prefer-default-export */
import { create } from "zustand";

import type { User } from "@/interfaces/profile";

interface StoreType {
  user?: User;
  setUser: (user?: User) => void;
}

export const useUserStore = create<StoreType>()(set => ({
  user: undefined,
  setUser: (user?: User) => set(state => ({ ...state, user })),
}));
