import signReducer from "../reducers/reducer";

describe("signReducer reducer", () => {
  const initialState = {
   "email": null,
   "loading": false,
   "name": null,
   "token": null,
  };
  test("should return the initial state", () => {
    expect(signReducer(undefined, {})).toEqual(initialState);
  });
});
 