import {
  ECartActions,
  SaveCartAction,
  SaveCartSuccessAction,
  RemoveFromCartAction,
  ModifyCartAction,
  CleanCartAction,
  ResetTotalCartAction,
  AddCartAction
} from './cart.action';

fdescribe('Cart Actions', () => {
  it('action test AddCartAction', () => {
    const action = new AddCartAction({id: 1});
    expect(action.type).toEqual(ECartActions.AddCart);
  });

  it('action test SaveCartAction', () => {
    const action = new SaveCartAction({});
    expect(action.type).toEqual(ECartActions.SaveCart);
  });

  it('action test SaveCartSuccessAction', () => {
    const action = new SaveCartSuccessAction();
    expect(action.type).toEqual(ECartActions.SaveCartSuccess);
  });

  it('action test RemoveFromCartAction', () => {
    const action = new RemoveFromCartAction(1);
    expect(action.type).toEqual(ECartActions.RemoveFromCart);
  });

  it('action test ModifyCartAction', () => {
    const action = new ModifyCartAction({ id: 1 });
    expect(action.type).toEqual(ECartActions.ModifyCart);
  });

  it('action test CleanCartAction', () => {
    const action = new CleanCartAction();
    expect(action.type).toEqual(ECartActions.CleanCart);
  });

  it('action test ResetTotalCartAction', () => {
    const action = new ResetTotalCartAction();
    expect(action.type).toEqual(ECartActions.ResetTotal);
  });
});
