import rootReducer from "./Reducers/Root.reducer";
import {configureStore} from '@reduxjs/toolkit'

const store=configureStore({reducer:rootReducer});
export default store;