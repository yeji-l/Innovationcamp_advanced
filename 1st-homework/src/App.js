import React from 'react';
import './App.css';
// 할 일 정리
// 1. 뷰 만들기
//   -> 제목 / 내용 /공부 시간 / 기입할 인 풋 필요

// 2. 입력한 내용을 추가가 되어야 함
// -> state 사용

// 3. state에 추가 된 내용이 List 뷰에 뿌려져야 함
      // useRef사용

function App() {
  // 값을 잡아오는 것까진 되었는데 실제로 추가가 되게 하려면 state에 값을 넣어야됨
  const [til_list, setTilList] = React.useState([]);
  const title_ref = React.useRef(null)
  const content_ref = React.useRef(null)
  const time_ref = React.useRef(null)

  //넣은거 함수 만들어서 빼준다.
  //Til list를 호출해가지고 그데이터 넣어줄거니깐 그 데이터를 묶는 과정 til_Data
  const addTIL = () => {
    const til_data={
      title: title_ref.current.value,
      content: content_ref.current.value,
      time: time_ref.current.value,
    }
    // 정말로 리스트에 들어가게 해줘야 한다.(추가)
    // til_list.push(til_data); => push해서 data를 list에 넣어주면 안되는 가 했을 때 안됨 왜냐 const로 선언된 것들은 불변성 때문
    setTilList([...til_list, til_data]);
  }

  return (
    <div className="App">
      <div style={{
        display: "flex",
        gap: "1rem",
        // space-between하면 양옆으로 정렬됨
        justifyContent: "space-around",
        margin: "2rem",
        textAlign:"left"
      }} >
      <div style={{
        width: "60vmin"
      }}>
        <div className='title-area' style={{
          borderBottom: "1px solid #ccc"
        }}>
          <h1>TIL</h1>
        </div>
        {/* 가상돔에서 변경된 값만 찾을려면 map이나 filter같이 연산을 처리하는 경우 고유의 값(unique key)값이 필요하다 */}
        <div className='til-list'>
          {til_list.map((til, idx )=> {
            return (
              <div className='til-item' key={idx} style={{
                border: "1px solid #ccc",
                padding:".5rem",
                margin: "1rem",
              }}>
                <h3>{til.title}</h3>
                <p>{til.content}</p>
                <p>{til.time}</p>
              </div>
            )
          })}

        </div>
      </div>
        <div className='input-area'
        style={{
          display: "flex",
          gap: "1rem",
          flexDirection: "column",

        }}>
          <div>
            <span>과목</span>
            <input ref={title_ref}/>
          </div>

          <div>
            <span>내용</span>
            <input ref={content_ref}/>
          </div>

          <div>
            <span>공부시간</span>
            <input ref={time_ref}/>
          </div>

          <button style={{
            border: "none",
            padding: "1rem"
          }}
          // 값을 가져오려면 .current.value
          // ()=>{console.log(title_ref.current.value, content_ref.current.value ,time_ref.current.value)}
          onClick = {addTIL}
          >추가하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
