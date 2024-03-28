import create from 'zustand';

const usePopupStore = create((set) => ({
  isOpen: false,
  togglePopup: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default usePopupStore;