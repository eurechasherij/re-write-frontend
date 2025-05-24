import { create } from "zustand";
import { persist } from "zustand/middleware";
import { EncryptedStorage } from "./middleware/EncryptedStorage";

interface AuthUserState {
  user: any;
  isLoggedIn: boolean;
  setUser: (user: any) => void;
  setLoggedIn: (isLoggedIn: boolean) => void;
}

export const useAuthUserStore = create(
  persist<AuthUserState>(
    (set) => ({
      user: null,
      isLoggedIn: false,
      setUser: (user) => set({ user }),
      setLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
    }),
    {
      name: "user-meta",
      storage: EncryptedStorage(),
    }
  )
);
