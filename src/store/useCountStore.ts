import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type CountState = {
  count: number;
  increment: (num: number) => void;
  decrement: (num: number) => void;
};

export const useCountStore = create<CountState>()(
  persist(
    (set) => ({
      count: 0,
      increment: (num: number) => set((state) => ({ count: state.count + num })),
      decrement: (num: number) => set((state) => ({ count: state.count - num })),
    }),
    {
      name: "count-storage", // 로컬 스토리지 키
      storage: createJSONStorage(() => localStorage),
    }
  )
);
