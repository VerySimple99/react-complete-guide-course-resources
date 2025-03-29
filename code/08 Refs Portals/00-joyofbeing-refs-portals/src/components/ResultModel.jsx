import { useImperativeHandle, useRef } from "react";
import { createPortal } from 'react-dom';
// createPortal : 컴포넌트를 DOM 계층 구조 외부의 다른 DOM 노드에 렌더링할 수 있게 해줍니다.React 컴포넌트 트리와 실제 DOM 트리를 분리할 수 있습니다. 이는 부모 컴포넌트의 CSS 스타일(overflow, z-index 등)에 영향을 받지 않고 렌더링해야 할 때 유용합니다.Portal을 사용하면 UI 요소들이 시각적으로나 동작적으로 DOM의 다른 부분에 존재하면서도 React의 컴포넌트 구조와 상태 관리의 이점을 유지할 수 있습니다. 
export default function ResultModal({ref,targetTime, remainingTime, onReset}){
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime/ (targetTime * 1000)) * 100);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    };
  });                                
  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>The target time was <strong>{targetTime} second.</strong> </p>
      <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p><form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
}