// Header 컴포넌트 정의
function Header() {
  return (
    <header>
      {/* React 로고 이미지를 표시하는 img 태그 */}
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      
      {/* 앱의 제목을 나타내는 h1 태그 */}
      <h1>React Essentials</h1>
      
      {/* React의 핵심 개념을 설명하는 문단 */}
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

// App 컴포넌트 정의 (이 프로젝트의 메인 컴포넌트)
// custom components(커스텀 : 개발자 정의 컴포넌트) 는 반드시 대문자로 해야 함 , 구분이 목적 
// built-in components(내장 컴포넌트)는 소문자
function App() {
  return (
    <div>
      {/* Header 컴포넌트를 포함하여 화면 상단에 표시 */}
      <Header />
      
      {/* 본문 영역 */}
      <main>
        {/* 섹션 제목 표시 */}
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

// App 컴포넌트를 내보내기(export)하여 다른 파일에서 사용 가능하게 함
export default App;

