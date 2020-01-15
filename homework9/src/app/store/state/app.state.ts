import { IProductState, initialProductSate } from './product.state';

export interface IAppState {
  products: IProductState;
}

export const initialAppState: IAppState = {
  products: initialProductSate,
};


export const getInitialAppState = (): IAppState => initialAppState;
