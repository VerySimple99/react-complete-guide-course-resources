import { useState, useEffect } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAL");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);
    return () => {
      clearInterval(interval); //이 부분은 cleanup 함수라고 불려요. useEffect가 실행된 후에, 그리고 컴포넌트가 화면에서 사라지기 전에 한 번 실행돼요
    };
  }, []);

  return <progress value={remainingTime} max={timer}></progress>
}
/* 
ProgressBar 컴포넌트는 외부에서 timer 값을 받아서 초기 남은 시간으로 설정하고, 매 0.01초마다 남은 시간을 10씩 줄여나가면서 <progress> 태그를 통해 현재 남은 시간을 시각적으로 보여주는 역할을 합니다. 컴포넌트가 사라질 때는 타이머를 깔끔하게 정리해서 불필요한 동작을 막아주고요! 아주 똑똑한 프로그레스 바죠? 😎
*/