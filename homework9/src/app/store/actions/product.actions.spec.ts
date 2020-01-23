import {
  GetProductAction,
  EProductActions,
  GetProductsPerCategoryAction,
  FilterProductCategoryAction,
  FilterProductNameAction,
  GetProductsPerCategorySuccessAction,
  GetProductsPerCategoryFailureAction,
  GetProductsAction,
  GetProductsSuccessAction,
  GetProductsFailureAction,
  SearchProductsActions,
  SearchProductsSuccesstsActions,
  SearchProductsFailureActions,
  LikeProductAction,
  LikeProductFailureActions,
  LikeProductSuccesstsActions
} from './product.actions';

fdescribe('Product Actions', () => {
  it('action test GetLoginAction', () => {
    const action = new GetProductAction(1);
    expect(action.type).toEqual(EProductActions.GetProduct);
  });

  it('action test GetProductsPerCategoryAction', () => {
    const action = new GetProductsPerCategoryAction('');
    expect(action.type).toEqual(EProductActions.GetProductsPerCategory);
  });

  it('action test FilterProductCategoryAction', () => {
    const action = new FilterProductCategoryAction('');
    expect(action.type).toEqual(EProductActions.SaveFilterCategory);
  });

  it('action test FilterProductNameAction', () => {
    const action = new FilterProductNameAction('');
    expect(action.type).toEqual(EProductActions.SaveFilterSearch);
  });

  it('action test GetProductsPerCategorySuccessAction', () => {
    const action = new GetProductsPerCategorySuccessAction([]);
    expect(action.type).toEqual(EProductActions.GetProductsPerCategorySuccess);
  });

  it('action test GetProductsPerCategoryFailureAction', () => {
    const action = new GetProductsPerCategoryFailureAction([]);
    expect(action.type).toEqual(EProductActions.GetProductsPerCategoryFailure);
  });

  it('action test GetProductsAction', () => {
    const action = new GetProductsAction();
    expect(action.type).toEqual(EProductActions.GetProducts);
  });

  it('action test GetProductsSuccessAction', () => {
    const action = new GetProductsSuccessAction([]);
    expect(action.type).toEqual(EProductActions.GetProductsSuccess);
  });

  it('action test GetProductsFailureAction', () => {
    const action = new GetProductsFailureAction([]);
    expect(action.type).toEqual(EProductActions.GetProductsFailure);
  });

  it('action test SearchProductsActions', () => {
    const action = new SearchProductsActions('');
    expect(action.type).toEqual(EProductActions.SearchProducts);
  });

  it('action test SearchProductsSuccesstsActions', () => {
    const action = new SearchProductsSuccesstsActions([]);
    expect(action.type).toEqual(EProductActions.SearchProductsSuccess);
  });

  it('action test SearchProductsFailureActions', () => {
    const action = new SearchProductsFailureActions([]);
    expect(action.type).toEqual(EProductActions.SearchProductsFailure);
  });

  it('action test LikeProductAction', () => {
    const action = new LikeProductAction({ kind: 1, product_id: 1 });
    expect(action.type).toEqual(EProductActions.LikeProduct);
  });

  it('action test LikeProductSuccesstsActions', () => {
    const action = new LikeProductSuccesstsActions();
    expect(action.type).toEqual(EProductActions.LikeProductSuccess);
  });

  it('action test LikeProductFailureActions', () => {
    const action = new LikeProductFailureActions({});
    expect(action.type).toEqual(EProductActions.LikeProductFailure);
  });
});
