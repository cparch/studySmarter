import FormHandlerReducer from './FormHandler'
import { combineReducers} from 'redux';
import sideDrawerToggle from './sideDrawer'
import submitAlertReducer from './submitAlert'
import classesReducer from './classes'
import testReducer from './testList'
import studySessionReducer from './studySession'
import testGradeReducer from './testGradeHandler'
import homePageReducer from './homePageHandler'


const allReducers = combineReducers({FormHandlerReducer, sideDrawerToggle, submitAlertReducer, classesReducer, testReducer, studySessionReducer, testGradeReducer, homePageReducer})


export default allReducers
