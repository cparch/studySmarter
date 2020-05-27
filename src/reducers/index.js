import FormHandlerReducer from './FormHandler'
import { combineReducers} from 'redux';
import studySessionTimes from './studySessionTimes'

const allReducers = combineReducers({studySessionTimes, FormHandlerReducer})

export default allReducers
