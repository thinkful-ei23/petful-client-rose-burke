import { catReducer } from "./cat";
import { dogReducer } from "./dog";
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
  cat: catReducer,
  dog: dogReducer
});