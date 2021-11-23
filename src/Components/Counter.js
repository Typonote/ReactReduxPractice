// 숫자를 더하고 뺄 수 있는 카운터 컴포넌트(p.432)
import React from "react";
import "./scss/Counter.scss";

const Counter = React.memo(({ number, onIncrease, onDecrease }) => {
  return (
    <div className="Counter__Container">
      <h1>{number}</h1>
      <div>
        <button className="Counter__Button" onClick={onIncrease}>
          +1
        </button>
        <button className="Counter__Button" onClick={onDecrease}>
          -1
        </button>
      </div>
    </div>
  );
});

export default Counter;
