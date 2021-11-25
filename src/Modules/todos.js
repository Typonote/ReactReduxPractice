// Todos 모듈
import produce from "immer";
import { createAction, handleActions } from "redux-actions";

// 1. 액션 타입 정의

const CHANGE_INPUT = "todos/CHANGE_INPUT"; // 인풋 값을 변경함
const INSERT = "todos/INSERT"; // 새로운 todo 를 등록함
const TOGGLE = "todos/TOGGLE"; // todo 를 체크/체크해제 함
const REMOVE = "todos/REMOVE"; // todo 를 제거함

// 2. 액션 생성 함수
export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 3; // insert 가 호출 될 때마다 1씩 더해집니다.(todo 객체 두 개를 사전에 미리 넣어 둘 것이므로 그다음에 새로 추가될 항목의 id가 3)
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));

export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

// 3. 초기 상태 지정

const initialState = {
  input: "",
  todos: [
    {
      id: 1,
      text: "리덕스 기초 배우기",
      done: true,
    },
    {
      id: 2,
      text: "리액트와 리덕스 사용하기",
      done: false,
    },
  ],
};

// 4. 리듀서 함수 생성

// 객체에 한 개 이상의 값이 들어가므로 불변성을 유지해 주어야 한다. => spread 연산자(…)를 사용
const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, (draft) => {
        draft.input = input;
      }),
    [INSERT]: (state, { payload: todo }) =>
      produce(state, (draft) => {
        draft.todos.push(todo);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const index = draft.todos.findIndex((todo) => todo.id === id);
        draft.todos.splice(index, 1);
      }),
  },
  initialState
);

export default todos;
