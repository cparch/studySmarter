import FormHandlerReducer from './FormHandler'
import { combineReducers} from 'redux';
import studySessionTimes from './studySessionTimes'
import sideDrawerToggle from './sideDrawer'

const allReducers = combineReducers({studySessionTimes, FormHandlerReducer, sideDrawerToggle})

export default allReducers
