import { IProductState, initialProductSate } from './product.state';

export interface IAppState {
  myStore: IProductState;
}

export const initialAppState: IAppState = {
  myStore: initialProductSate,
};


export const getInitialAppState = (): IAppState => initialAppState;
