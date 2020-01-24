import { CategoryActions, ECategoryActions, GetCategoryAction, GetCategoriesSuccessAction } from './../actions/category.action';
import { categoryReducer, initialCategoryState } from './my-Category.reducer';

fdescribe('category reducer test ', () => {

  it('expect state to be the same', () => {
    const category = categoryReducer(initialCategoryState, new GetCategoryAction());
    expect(category).toEqual(initialCategoryState);
  });

  it('should retun the initial state when not sent anything', () => {
    const category = categoryReducer(initialCategoryState, new GetCategoryAction());
    expect(category).toEqual(initialCategoryState);
  });

  it('should retun the same value when success due to pure', () => {
    const category = categoryReducer(initialCategoryState, new GetCategoriesSuccessAction([]));
    expect(category).toEqual(initialCategoryState);
  });
});
