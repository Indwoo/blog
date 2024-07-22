import { useState } from 'react';
import './App.css';

function App() {

  let post = "부평 맛집";
  let [글제목,제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [추천, 추천증가] = useState(0);

  return (
    <div className="App">
      <div className = "black-nav">
        <h4>Blog</h4>
      </div>

      <button onClick={()=>{
          let copy = [...글제목];
          copy[0] = '여자 코트 추천';
          제목변경(copy);
        }}>글수정</button>

      <button onClick={()=>{
        let copy = [...글제목];
        copy = copy.sort()
        제목변경(copy);
      }}>가나다순정렬</button>

      <div className='list'>
        <h4>{글제목[0]} <span onClick={()=>추천증가(추천+1)}>👍</span>{추천}</h4>
        <p>7월 22일 발행</p>
      </div>

      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>7월 22일 발행</p>
      </div>

      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>7월 22일 발행</p>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
