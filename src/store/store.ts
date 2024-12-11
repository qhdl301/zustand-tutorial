import { create } from "zustand";
import { persist } from "zustand/middleware";

type CountState = {
  count: number;
  increment: (qty: number) => void;
  decrement: (qty: number) => void;
};

export const useCountStore = create<CountState>()(
  persist(
    (set) => ({
      count: 0,
      increment: (qty: number) =>
        set((state) => ({ count: state.count + qty })),
      decrement: (qty: number) =>
        set((state) => ({ count: state.count - qty })),
    }),
    {
      name: "count-storage", // 로컬 스토리지 키
    }
  )
);
