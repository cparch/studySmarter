import FormHandlerReducer from './FormHandler'
import { combineReducers} from 'redux';
import studySessionTimes from './studySessionTimes'
import sideDrawerToggle from './sideDrawer'
import submitAlertReducer from './submitAlert'
import classesReducer from './classes'
import testReducer from './testList'

const allReducers = combineReducers({studySessionTimes, FormHandlerReducer, sideDrawerToggle, submitAlertReducer, classesReducer, testReducer})

export default allReducers
