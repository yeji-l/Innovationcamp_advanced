import React from 'react';

// {data}를 바꿔주고 싶으니깐 어디를 새로그려 너 업데이트해 하고 말해줘야한다.(리랜더링)
// state는 리랜더링을 시켜주기 위한 어떤한 값을 의미한다, 정해진 규칙대로 업데이트 해야한다.
const One = () => {

  //usestate 생김새
  const [someValue, setValue] = React.useState("hi");
  return (
    <div>
      <p>{someValue}</p>
      <button onClick={() => {setValue("바꿀거야!")}}>바꾸기</button>
    </div>
  );
};

export default One;