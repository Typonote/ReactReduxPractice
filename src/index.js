import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import rootReducer from "./Modules";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

// 스토어를 만들고 리액트 애플리케이션에 리덕스를 적용하는 작업은 src 디렉터리의 index.js에서 이루어진다.
// App 컴포넌트를 rovider 컴포넌트로 감싸준다 => 이 컴포넌트를 사용할 때는 store를 props로 전달해 주어야 한다.

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,

  document.getElementById("root")
);

reportWebVitals();
