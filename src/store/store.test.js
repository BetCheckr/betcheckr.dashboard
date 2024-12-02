import { act } from 'react';
import useStore from './store';

describe('useStore', () => {
  afterEach(() => {
    // Reset the store after each test
    act(() => {
      useStore.setState({ bets: [] });
    });
  });

  it('should add a bet', () => {
    const { addBet } = useStore.getState();

    act(() => {
      addBet({ id: 1, name: 'Bet 1' });
    });

    const bets = useStore.getState().bets;
    expect(bets).toEqual([{ id: 1, name: 'Bet 1' }]);
  });

  it('should remove a bet', () => {
    const { addBet, removeBet } = useStore.getState();

    act(() => {
      addBet({ id: 1, name: 'Bet 1' });
      addBet({ id: 2, name: 'Bet 2' });
      removeBet(1);
    });

    const bets = useStore.getState().bets;
    expect(bets).toEqual([{ id: 2, name: 'Bet 2' }]);
  });
});
