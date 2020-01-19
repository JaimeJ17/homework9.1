import { ECategoryActions } from './../actions/category.action';
import { Category } from './../../modules/shared/interfaces/category.interface';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { CategoryActions } from '../actions/category.action';
import { createFeatureSelector } from '@ngrx/store';


export const categoryAdapter = createEntityAdapter<Category>();
export interface CategoryState extends EntityState<Category> { }

const defualtCategory = {
  ids: [],
  entities: {
  }
};

export const initialCategoryState: CategoryState =  categoryAdapter.getInitialState(defualtCategory);


export function categoryReducer(state: CategoryState = initialCategoryState, action: CategoryActions): CategoryState{
  switch (action.type) {
    case ECategoryActions.GetCategoriesSuccess: {
      return categoryAdapter.addMany(action.payload, state);
    }

    default: {
      return {... state};
    }
  }
}

export const getCategoryState = createFeatureSelector<CategoryState>('category');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = categoryAdapter.getSelectors(getCategoryState);
