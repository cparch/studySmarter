import { createStore, applyMiddleware } from "redux"
import RootReducer from './reducers'
import ReduxThunk from 'redux-thunk'

export const middlewares = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

export const store = createStoreWithMiddleware(RootReducer)