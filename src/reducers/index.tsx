import { combineReducers } from "redux";

import counter from './counter';
import todos from './todos';

const rootRenderer = combineReducers({
  todos,
  counter
})

export default rootRenderer;

export type RootState = ReturnType<typeof rootRenderer>; //useSelector로 값을 불러올때 type error를 방지하기 위함