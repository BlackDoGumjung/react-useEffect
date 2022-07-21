import React, { useState, useEffect } from 'react';
import './style.css';
import Timer from './component/Timer';

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [showTimer, setShowTimer] = useState(false);

  const countUpdate = () => {
    setCount(count + 1);
  };
  const inputChange = (e) => {
    setName(e.target.value);
  };

  //랜더링 될 때마다 실행 (랜더링 된 직후 실행되는 것!)
  useEffect(() => {
    console.log('카운트할 때만 변화✨');
  }, [count]); // 여기에 넣으면 마운트될 때 + count 값이 변화될 때만 변할 것임
  //useEfect(()=>{})[] 혹은 value값)

  useEffect(() => {
    console.log('이름이 변할 때만 변화✨');
  }, [name]); // 마운트될 때 + 이름이 입력될 때

  useEffect(() => {
    console.log('빈 배열로 두면 처음 마운트 될 때만 변경🤔');
  }, []); // 마운트 될 때

  return (
    <div>
      <button onClick={countUpdate}>Update</button>
      <input type="text" value={name} onChange={inputChange} />
      <span>count: {count}</span>
      <div>
        {showTimer && <Timer />}
        <button
          onClick={() => {
            setShowTimer(!showTimer);
          }}
        >
          Toggle Timer
        </button>
      </div>
    </div>
  );
}
