import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  // StrictMode 는 개발단계에서만 두번씩 실행,잠재적인 문제를 감지하고 경고하기 위한 개발 도구
  <StrictMode>
    <App />
  </StrictMode>
);
