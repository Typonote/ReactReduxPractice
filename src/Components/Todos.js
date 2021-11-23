// 해야 할 일을 추가하고, 체크하고, 삭제할 수 있는 할 일(Todo) 목록 컴포넌트(p.433)
import React from "react";
import "./scss/Todos.scss";

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div className="Todos__Item">
      <input type="checkbox" />
      <span>예제 텍스트</span>
      <button className="Todos__Button">삭제</button>
    </div>
  );
};

const Todos = ({
  input, // 인풋에 입력되는 텍스트
  todos, // 할 일 목록이 들어 있는 객체
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Todos__Container">
      <form onSubmit={onSubmit}>
        <input />
        <button type="submit" className="Submit__Button">
          등록
        </button>
      </form>
      <div>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default Todos;
