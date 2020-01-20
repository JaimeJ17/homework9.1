import { EProductActions } from './../actions/product.actions';
import { Product } from './../../modules/shared/interfaces/product.interface';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
import { ProductActions } from '../actions/product.actions';


export const productAdapter = createEntityAdapter<Product>();
export interface ProductState extends EntityState<Product> {
  currentProduct: Product;
  categoryFilter: string;
  searchQuery: string;
}

const defualtProduct = {
  ids: [],
  entities: {
  },
  currentProduct: null,
  categoryFilter: null,
  searchQuery: null
};

export const initialProductState: ProductState =  productAdapter.getInitialState(defualtProduct);


export function productsReducer(state: ProductState = initialProductState, action: ProductActions): ProductState {
  switch (action.type) {
    case EProductActions.GetProductsSuccess: {
      return productAdapter.addMany(action.payload, state);
    }

    case EProductActions.GetProductsPerCategorySuccess: {
      return productAdapter.addMany(action.payload, state);
    }

    case EProductActions.GetProduct: {
      return {
        ...state,
        currentProduct: state.entities[action.payload],
      };
    }

    case EProductActions.SaveFilterCategory: {
      if (state.categoryFilter === action.payload) {
        return {
          ...state,
          categoryFilter: null,
        };
      } else {
        return {
          ...state,
          categoryFilter: action.payload,
        };
      }
    }

    case EProductActions.SaveFilterSearch: {
      return {
        ...state,
        searchQuery: action.payload,
      };
    }

    case EProductActions.SearchProductsSuccess: {
      return productAdapter.addMany(action.payload, state);
    }

    case EProductActions.LikeProductSuccess: {
      return { ...state };
    }

    default: {
      return {... state};
    }
  }
}

export const getProductState = createFeatureSelector<ProductState>('product');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = productAdapter.getSelectors(getProductState);
