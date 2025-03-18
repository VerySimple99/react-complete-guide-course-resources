// children 이용
// export default function TabButton(props) {
//   return (
//     <li>
//       {/* children : react 의 약속된 prop
//           React 컴포넌트의 속성(props) 중 하나로, 컴포넌트 태그 사이에 포함된 요소(내용)를 의미합니다.
//           즉, 부모 컴포넌트가 자식 컴포넌트를 렌더링할 때 자식 요소(children)를 전달하는 역할
//       */}
//       <button>{props.children}</button>
//     </li>
//   );
// }

// children 이용
// 아래와 같이 구조 분해 할당도 가능
// export default function TabButton({ children }){
//   return (
//     <button>{children}</button>
//   );
// }

// using Attributes : Attribute Props
// export default function TabButton({ label }){
//   return (
//     <button>{label}</button>
//   );
// }

// 이벤트 처리 연습
export default function TabButton({ children, onSelect}) {
  // 일반 JS 방식 (명령적)
  // document.querySelector('button').addEventListener('click',() => {});
  // react 방식 (선언적) 의도 명확, 높은 가독성과 유지보수성
  //컴포넌트 기반 개발 => React의 이벤트 처리는 컴포넌트 내에 캡슐화 => 모듈화 => 재사용성 향상
  // function handleClick() {
  //   console.log("Hello World!");
  // }
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
