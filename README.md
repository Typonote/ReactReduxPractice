# ReactReduxPractice
상태관리 라이브러리인 Redux을 학습하기 위한 코드

## 💻 기술 스택

- HTML5
- CSS3 & SCSS
- JavaScript
- React
- Git
- Redux

## ✨ 공부 내용 메모

1. 액션(action): 상태에 어떠한 변화가 필요하면 액션이란 것이 발생한다. <br/>
=> 변화를 일으켜야 할 때마다 액션 객체를 만들어야 하는데, 매번 액션 객체를 작성하기 번거롭고, 실수로 정보를 놓칠 수도 있다. 이러한 일을 방지하기 위해 이를 함수로 만들어서 관리한다.

```

const changeInput = text => ({ 
  type: 'CHANGE_INPUT',
text
});

```

2. 리듀서(reducer): 액션을 만들어서 발생시키면, 리듀서가 현재 상태와 전달받은 액션 객체를 파라미터로 받아 오고, 두 값을 참고하여 새로운 상태를 만들어 반환한다.

```
const initialState = {
  counter: 1
};

function reducer(state = initialState, action) {
    switch (action.type) {
      case INCREMENT:
        return {
            counter: state.counter + 1
        };
      default:
        return state;
    }
}

```

3. 스토어(store): 프로젝트에 리덕스를 적용하기 위해 스토어를 만든다. 한 개의 프로젝트는 단 하나의 스토어만 가질 수 있으며, 스토어 안에는 현재 애플리케이션 상태와 리듀서가 들어가 있다.

```
import { createStore } from 'redux';
import Reducer from './reducer';

const store = createStore(Reducer);

export default store;.
```
- 4. 디스패치(dispatch): 디스패치는 ‘액션을 발생시키는 것’이라고 이해하면 된다. 이 함수는 dispatch(action)과 같은 형태로 액션 객체를 파라미터로 넣어서 호출한다. 이 함수가 호출되면 스토어는 리듀서 함수를 실행시켜서 새로운 상태를 만들어 줍니다.

```
 const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(actionSetAnswer(e.target.value, questionNUmber));
  };
```


## 📄 예시




