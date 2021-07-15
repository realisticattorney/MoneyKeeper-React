import recordsReducer from '../reducers/recordsReducer';

describe('recordsReducer reducer', () => {
  const initialState = [];
  test('should return the initial state', () => {
    expect(recordsReducer(undefined, {})).toEqual(initialState);
  });
});
