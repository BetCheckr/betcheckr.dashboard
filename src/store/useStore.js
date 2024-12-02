import {create} from 'zustand'

const useStore = create((set) => ({
  bets: [],
  addBet: (bet) => set((state) => ({ bets: [...state.bets, bet] })),
  removeBet: (id) => set((state) => ({ bets: state.bets.filter(bet => bet.id !== id) })),
}));

export default useStore;
