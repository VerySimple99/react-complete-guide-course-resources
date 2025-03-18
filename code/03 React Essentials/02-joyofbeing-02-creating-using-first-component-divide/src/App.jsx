import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  function handleSelect(selectedButton) {
    console.log(selectedButton);
  }
  return (
    <div>
      <Header />
      {/* <Header />  컴포넌트는 여러번 재사용 가능 */}
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* title , description  과 같은 props 를 이용  */}
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            {/* 아래와 같이 효율적으로 표현 할 수 있음
          javascript의  ... 연산자(스프레드 연산자)
          */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id = "examples">
          <h2>Examples</h2>
          <menu>
            {/* <li><button></button></li>
            <li><button></button></li> */}
            {/* 위와 같이 반복하지 말고 TabButton.jsx 컴포넌트를 만들어서 재사용한다  */}
            {/* children 사용 */}
            {/* <TabButton onSelect={handleSelect}>Components</TabButton>
            <TabButton onSelect={handleSelect}>JSX</TabButton>
            <TabButton onSelect={handleSelect}>Props</TabButton>
            <TabButton onSelect={handleSelect}>State</TabButton> */}
            {/* 
            이벤트로부터 독립적인 함수는 어떻게 “구성 및 설정”할 수 있습니까? (예: 어떤 인자를 전달할지 정의하는 등)
            아래처럼 익명 또는 화살표 함수를 이용해 인자를 전달, 버튼을 구분하도록 함 
            */}
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>

            {/* attribute 사용해도 됨 : 두 방법 모두 가능 */}
            {/* <TabButton label="Components"></TabButton> */}
           </menu>
          Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;
