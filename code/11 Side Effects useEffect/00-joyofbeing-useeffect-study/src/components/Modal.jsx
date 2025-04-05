import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, children, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    if(open) {
      dialog.current.showModal();
    }else {
      dialog.current.close();
    }
  }, [open]); // [open] 의존성 배열은 open 값이 변경될 때마다 이 효과가 실행되도록 합니다

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
/* 
상태 변화에 반응하기 🔄

[open] 의존성 배열은 open 값이 변경될 때마다 이 효과가 실행되도록 합니다
컴포넌트가 처음 렌더링될 때도 실행됩니다


DOM 조작하기 🖱️

open이 true일 때 실제 DOM 요소인 dialog에 대해 showModal() 메소드를 호출합니다
open이 false일 때는 close() 메소드를 호출합니다
이것은 React의 선언적 코드(JSX)와 명령적 DOM API를 연결하는 다리 역할을 합니다


부수 효과 처리하기 ⚙️

이 코드는 React의 렌더링 사이클 외부에서 일어나는 작업을 다룹니다
다이얼로그 열기/닫기는 React의 가상 DOM만으로는 제어할 수 없는 브라우저 내장 동작입니다


동기화 메커니즘 🔄

React 상태(open prop)와 실제 DOM 상태(다이얼로그가 보이는지 여부)를 동기화합니다
부모 컴포넌트에서 open 상태가 변경되면 실제 다이얼로그 요소의 표시 상태도 그에 맞게 업데이트됩니다
*/