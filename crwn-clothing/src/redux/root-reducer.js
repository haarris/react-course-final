//import userEvent from '@testing-library/user-event';
//import { useReducer } from 'react';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] //handled by redux persist now
}

const rootReducer = combineReducers({
    user: userReducer, //handled by firebase, not redux persist
    cart: cartReducer, //handled by redux persist now
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);