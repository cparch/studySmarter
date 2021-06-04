import { applyMiddleware , createStore } from 'redux'
import rootReducer from '../src/reducers'
import { middlewares } from '../src/createStore'

/* check prop types function: https://youtu.be/JQD-ApooNMI?list=PL-Db3tEF6pB8Am-IhCRgyGSxTalkDpUV_&t=1061 */

/* redux connect and mapstate to props: https://youtu.be/eSzRt9fFoiw?t=2084 */

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper
};

/* https://youtu.be/eSzRt9fFoiw?t=2593 */
export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddleware(rootReducer, initialState)
}