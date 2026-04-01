import { createSelector } from 'reselect';
import { RootState } from '../root-reducer';
import { CategoryItem, Category } from './categories.types';

const selectCategoryReducer = (state: RootState) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice): Category[] => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): Record<string, CategoryItem[]> =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as Record<string, CategoryItem[]>)
);