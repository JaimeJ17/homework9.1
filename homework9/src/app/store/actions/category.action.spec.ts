
import { GetCategoryAction, ECategoryActions, GetCategoriesAction, GetCategoriesSuccessAction, GetCategoriesFailureAction, GetCategorysSuccessAction, GetCategorysFailureAction, ToggleCategoryAction } from './category.action';

fdescribe('Category Actions', () => {

  it('action test GetCategoryAction', () => {
    const action = new GetCategoryAction();
    expect(action.type).toEqual(ECategoryActions.GetCategory);
  });

  it('action test GetCategoriesAction', () => {
    const action = new GetCategoriesAction();
    expect(action.type).toEqual(ECategoryActions.GetCategories);
  });

  it('action test GetCategoriesSuccessAction', () => {
    const action = new GetCategoriesSuccessAction([]);
    expect(action.type).toEqual(ECategoryActions.GetCategoriesSuccess);
  });

  it('action test GetCategoriesFailureAction', () => {
    const action = new GetCategoriesFailureAction([]);
    expect(action.type).toEqual(ECategoryActions.GetCategoriesFailure);
  });

  it('action test GetCategorysSuccessAction', () => {
    const action = new GetCategorysSuccessAction([]);
    expect(action.type).toEqual(ECategoryActions.GetCategorysSuccess);
  });

  it('action test GetCategoriesFailureAction', () => {
    const action = new GetCategoriesFailureAction([]);
    expect(action.type).toEqual(ECategoryActions.GetCategoriesFailure);
  });

  it('action test GetCategorysFailureAction', () => {
    const action = new GetCategorysFailureAction([]);
    expect(action.type).toEqual(ECategoryActions.GetCategorysFailure);
  });

  it('action test ToggleCategoryAction', () => {
    const action = new ToggleCategoryAction();
    expect(action.type).toEqual(ECategoryActions.ToggleCategory);
  });
});
