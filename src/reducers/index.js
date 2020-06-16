import FormHandlerReducer from './FormHandler'
import { combineReducers} from 'redux';
import studySessionTimes from './studySessionTimes'
import sideDrawerToggle from './sideDrawer'
import submitAlertReducer from './submitAlert'

const allReducers = combineReducers({studySessionTimes, FormHandlerReducer, sideDrawerToggle, submitAlertReducer})

export default allReducers
