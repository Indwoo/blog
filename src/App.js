import { useState } from 'react';
import './App.css';

function App() {

  let post = "부평 맛집";
  let [글제목, 제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [추천, 추천증가] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [모달제목, 모달제목변경] = useState(2);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>Blog</h4>
      </div>

      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        제목변경(copy);
      }}>글수정</button>

      <button onClick={() => {
        let copy = [...글제목];
        copy = copy.sort()
        제목변경(copy);
      }}>가나다순정렬</button>

      {/* <div className='list'>
        <h4>{글제목[0]} <span onClick={() => 추천증가(추천 + 1)}>👍</span>{추천}</h4>
        <p>7월 22일 발행</p>
      </div>

      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>7월 22일 발행</p>
      </div>

      <div className='list'>
        <h4 onClick={() => { modal ? setModal(false) : setModal(true) }}>{글제목[2]}</h4>
        <p>7월 22일 발행</p>
      </div> */}

      {글제목.map(function (a, i) {
        return (
          <div className='list' key={i}>
            <h4 onClick={() => { modal ? setModal(false) : setModal(true); 모달제목변경(i) }}>
              {글제목[i]}
            </h4>
            <span onClick={() => {
              let copy = [...추천];
              copy[i] = copy[i] + 1;
              추천증가(copy)
            }}>👍</span>{추천[i]}
            {/* <h4>{ a }</h4> */}
            <p>7월 22일 발행</p>
          </div>
        )
      })
      }

      <button onClick={()=> {모달제목변경(0)}}>글제목0</button>
      <button onClick={()=> {모달제목변경(1)}}>글제목1</button>
      <button onClick={()=> {모달제목변경(2)}}>글제목2</button>
      {
        modal ? <Modal 모달제목 = {모달제목} 글제목={글제목} 제목변경={제목변경} /> : null
      }

      <h4>{post}</h4>
    </div>
  );
}

function Modal(props) {
  return (
    <>
      <div className='modal'>
        <h4>{props.글제목[props.모달제목]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button>제목변경</button>
      </div>
    </>
  )
}

export default App;
