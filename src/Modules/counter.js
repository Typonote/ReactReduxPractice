// Counter 모듈

// Ducks 패턴을 사용하여 액션 타입, 액션 생성 함수, 리듀서를 작성한 코드를 ‘모듈’이라고 합니다

// 1. 액션 타입 정의
// 액션 타입은 대문자로 정의하고, 문자열 내용은 '모듈 이름/액션 이름'과 같은 형태로 작성합니다.
// 문자열 안에 모듈 이름을 넣음으로써, 나중에 프로젝트가 커졌을 때 액션의 이름이 충돌되지 않게 해 줍니다.
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 2. 액션 생성 함수
export const increase = () => ({ type: "INCREASE" });
export const decrease = () => ({ type: "DECREASE" });

// 3. 초기 상태 지정

const initialState = {
  number: 0, // 초기 상태로 number 값을 설정
};

// 4. 리듀서 함수 생성
// 리듀서 함수에는 현재 상태를 참조하여 새로운 객체를 생성해서 반환하는 코드를 작성.

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;

// 액션 생성 함수는 export로 내보내 주었고, 리듀서는 export default로 내보냄 => 두 방식의 차이점은 export는 여러 개를 내보낼 수 있지만 export default는 단 한 개만 내보낼 수 있다.
