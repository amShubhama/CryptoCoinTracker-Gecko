import { create } from 'zustand';

const store = create((set) => ({
    currency: 'usd',
    setCurrency: (newCurrency) => set((state) => {
        return {
            ...state,
            currency: newCurrency
        }
    }),
    page: 1,
    setPage: (newPage) => set((state) => {
        return {
            ...state,
            page: newPage
        }
    })
}));

export default store;