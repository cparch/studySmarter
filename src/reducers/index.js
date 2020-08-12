import FormHandlerReducer from './FormHandler'
import { combineReducers} from 'redux';
import studySessionTimes from './studySessionTimes'
import sideDrawerToggle from './sideDrawer'
import submitAlertReducer from './submitAlert'
import classesReducer from './classes'
import testReducer from './testList'
import studySessionReducer from './studySession'

const allReducers = combineReducers({studySessionTimes, FormHandlerReducer, sideDrawerToggle, submitAlertReducer, classesReducer, testReducer, studySessionReducer})

export default allReducers
