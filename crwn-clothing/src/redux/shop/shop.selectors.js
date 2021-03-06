import memoize from 'lodash.memoize';
import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    );














/*
export const selectCollection = collectionUrlParam =>
  createSelector([selectCollections], collections => {
    return collections.find(collection => {
      return collection.routeName === collectionUrlParam;
    });
  });
*/
//can't do memoize for some reason??

/*
export const selectCollection = memoize(collectionUrlParam => {
    return createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    )
})


*/
