import '@testing-library/jest-dom';
import store from '../reducers/index';

describe('store object', () => {
  it('should validate the store', () => {
    expect(store).toBeTruthy();
    expect(typeof store.dispatch).toBe('function');
  });
});
