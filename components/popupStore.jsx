import { create } from "zustand";

const usePopupStore = create((set) => ({
  isOpen: false,
  closePopup: () => set((state) => ({ isOpen: false })),
  openPopup: () => set((state) => ({ isOpen: true })),
  togglePopup: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default usePopupStore;
