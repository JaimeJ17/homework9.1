import { GetLoginAction, ELoginActions, LogOutAction, GetLoginSuccessAction, SaveLoginAction, GetLoginFailureAction } from './login.action';

fdescribe('Login Actions', () => {

  it('action test GetLoginAction', () => {
    const action = new GetLoginAction({});
    expect(action.type).toEqual(ELoginActions.GetLogin);
  });

  it('action test LogOutAction', () => {
    const action = new LogOutAction();
    expect(action.type).toEqual(ELoginActions.LogOut);
  });

  it('action test GetLoginSuccessAction', () => {
    const action = new GetLoginSuccessAction({});
    expect(action.type).toEqual(ELoginActions.GetLoginsSuccess);
  });

  it('action test SaveLoginAction', () => {
    const action = new SaveLoginAction({});
    expect(action.type).toEqual(ELoginActions.SaveLogin);
  });

  it('action test GetLoginFailureAction', () => {
    const action = new GetLoginFailureAction({});
    expect(action.type).toEqual(ELoginActions.GetLoginsFailure);
  });
});
