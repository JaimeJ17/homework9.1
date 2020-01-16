import {ActionReducerMap} from '@ngrx/store';

import { productReducer } from './product.reducer';
import { IAppState } from '../state/app.state';

export const reducers: ActionReducerMap<IAppState, any> = {
  myStore: productReducer,
};

