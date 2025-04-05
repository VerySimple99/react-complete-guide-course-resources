import { useEffect } from 'react';

import ProgressBar from './ProgressBar.jsx';

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(()=>{
    console.log('TIMER SET');
    const timer = setTimeout(()=>{
      onConfirm();
    }, TIMER);

    return () => { // 이 cleanup 함수는 useEffect가 다시 실행되기 전이나 컴포넌트가 화면에서 사라질 때 실행돼요
      console.log('Cleaning up timer')
      clearTimeout(timer); //  setTimeout으로 예약해둔 작업을 취소하는 함수
    };
  }, [onConfirm]);
  
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={TIMER} />
    </div>
  );
}
