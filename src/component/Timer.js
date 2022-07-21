import React, { useEffect } from 'react';

const Timer = (props) => {
  useEffect(() => {
    const timer = setInterval(() => {
      // 마운트 시 돌아가기 시작... 타이머 정리해주지 안됨...
      // 마운트됐을 때 실행
      console.log('타이머 돌아가는 중...');
    }, 3000);

    return () => {
      clearInterval(timer); //정리작업 코드
      console.log('타이머 종료');
    }; // 사라질 때 타이머 종료하는...
  }, []);

  return (
    <div>
      <span>타이머를 시작합니다. 콘솔 보기!</span>
    </div>
  );
};

export default Timer;
