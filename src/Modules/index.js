// 리듀서를 여러 개 만든 상태 => 나중에 createStore 함수를 사용하여 스토어를 만들 때는 리듀서를 하나만 사용해야 함.
// combineReducers라는 유틸 함수를 사용하여 리듀서를 하나로 합쳐 주어야 한다.

import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

// 하나로 합침
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
