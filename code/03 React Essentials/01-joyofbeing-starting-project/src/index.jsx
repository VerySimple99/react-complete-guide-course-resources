/*
  필요한 라이브러리와 컴포넌트, 스타일을 가져옵니다. 📚
  HTML 문서에서 React 앱이 렌더링될 위치(root 요소)를 찾습니다.
  React의 createRoot API를 사용하여 렌더링 루트를 생성합니다. 🌳
  App 컴포넌트를 해당 위치에 렌더링합니다. 🖼️
*/

// React DOM 라이브러리에서 createRoot 기능을 가져옵니다.
// 이 기능은 React 18부터 도입된 새로운 렌더링 방식으로, 
// 더 효율적인 업데이트와 동시성 기능을 지원합니다.
import ReactDOM from "react-dom/client";

// App 컴포넌트를 가져옵니다. 이것은 우리 애플리케이션의 최상위 컴포넌트입니다.
// .jsx 확장자는 이 파일이 JSX(JavaScript XML) 문법을 사용한다는 것을 의미합니다.
// JSX는 JavaScript 내에서 HTML과 유사한 마크업을 작성할 수 있게 해주는 문법입니다.
import App from "./App.jsx";

// index.css 파일을 가져옵니다. 이 파일에는 전역 스타일 정의가 포함되어 있습니다.
// import 구문을 사용해 CSS를 가져오면, 웹팩과 같은 번들러가 이 스타일을 앱에 적용합니다.
import "./index.css";

// HTML 문서에서 id가 "root"인 요소를 찾아 변수에 저장합니다.
// 이 요소는 일반적으로 public/index.html 파일 내에 있으며,
// React 애플리케이션이 렌더링될 위치를 지정합니다.
const entryPoint = document.getElementById("root");

// ReactDOM.createRoot()를 사용하여 React의 렌더링 루트를 생성합니다.
// 그 후 .render() 메서드를 호출하여 App 컴포넌트를 렌더링합니다.
// <App />는 JSX 문법으로, React 컴포넌트를 HTML 태그처럼 사용할 수 있게 해줍니다.
// 이렇게 하면 App 컴포넌트와 그 하위 컴포넌트들이 "root" 요소 안에 렌더링됩니다.
ReactDOM.createRoot(entryPoint).render(<App />);