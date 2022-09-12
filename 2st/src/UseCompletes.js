import React from 'react';
//함수명이 use로 시작해야됨
//커스텀 훅에서 커스텀 훅을 호출 할 수 있다.

//뭐가 되었던 간에 return을 해줘야 한다.
const UseCompletes = (initial = "") => {
  //1. state로 어떤 값을 가지고 있어야하고
  const [text, setText] = React.useState(initial);
  //2. 그 값을 바꿔주고 싶어 그러면 ref값 가져온 걸로,  state를 바꿔주자!
  // _ref로 ref를 받아온다.
  const changeText = (_ref) => {
    setText(_ref.current.value);
  }
  return [text, changeText];
  }

export default UseCompletes;