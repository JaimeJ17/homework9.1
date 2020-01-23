import { GetErrorAction, EErrorActions } from "./error.actions";

fdescribe('Error Actions', () => {
  it('action test GetErrorActionS', () => {
    const action = new GetErrorAction({});
    expect(action.type).toEqual(EErrorActions.GetError);
  })
});
