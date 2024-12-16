import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface GuestBookState {
  guestBookEntry: string; // 입력 값
  guestBookList: string[]; // 방명록 목록
  setGuestBookEntry: (entry: string) => void; // 입력값 업데이트
  addGuestBookEntry: () => void; // 방명록 추가
  deleteGuestBookEntry: (index: number) => void; // 방명록 삭제
}

export const useGuestBookStore = create<GuestBookState>()(
  persist(
    (set, get) => ({
      guestBookEntry: "",
      guestBookList: [],
      setGuestBookEntry: (entry) => set({ guestBookEntry: entry }),
      addGuestBookEntry: () => {
        const { guestBookEntry, guestBookList } = get();
        if (guestBookEntry.trim()) {
          set({
            guestBookList: [...guestBookList, guestBookEntry],
            guestBookEntry: "", // 입력값 초기화
          });
        }
      },
      deleteGuestBookEntry: (index) => {
        const { guestBookList } = get();
        const updatedList = guestBookList.filter((_, i) => i !== index);
        set({ guestBookList: updatedList });
      },
    }),
    {
      name: "guestbook-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
