//there is configure store that makes the store
//and store needs to know about all the reducers

import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {}
});

export default store;