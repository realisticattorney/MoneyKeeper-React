import accountsReducer from "../reducers/accountsReducer";

describe("accountsReducer reducer", () => {
  const initialState = [];
  test("should return the initial state", () => {
    expect(accountsReducer(undefined, {})).toEqual(initialState);
  });
});
  