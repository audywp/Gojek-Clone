import {combineReducers} from 'redux';
import {GlobalReducer} from './GLobalReducer';
import {HomeReducer} from '../Features/Home/reducer';
import {LandingReducer} from '../Features/LandingPage/reducer';

export default combineReducers({
  GlobalReducer,
  LandingReducer,
  HomeReducer,
});
