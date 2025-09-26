import { create } from "zustand";

export const useAuthStore = create((set) => {
  return {
    user: {
      id: 1,
      name: "Hoàng An",
    },
    updateUser: () => {
      set((state) => {
        return {
          user: {
            ...state.user,
            name: "Hoàng An Unicode",
          },
        };
      });
    },
  };
});
