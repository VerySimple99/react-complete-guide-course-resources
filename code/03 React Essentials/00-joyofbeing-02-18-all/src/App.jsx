//  React의 특정 기능을 "걸어서(hook)" 사용한다는 개념입니다. 마치 낚시 바늘로 물고기를 낚아채듯이, React의 기능을 함수형 컴포넌트 안으로 "낚아채서" 가져온다고 생각하면 됩니다.
//React Hooks는 클래스 컴포넌트 없이도 상태(state)와 생명주기(lifecycle) 기능을 사용할 수 있게 해주는 함수입니다. 😊✨

import { useState } from "react"; // React Hooks

import { CORE_CONCEPTS } from "./data-with-examples.js";
import { EXAMPLES } from "./data-with-examples.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  // 컴포넌트 함수 안의
  // 탑 레벨에서만 사용가능
  // useState - 상태 관리
  // 상태가 변경되면 컴포넌트는 자동으로 재렌더링됩니다.
  // useState 는 항상 2개의 요소를 배열로 반환
  // const [selectedTopic, setSelectedTopic] = useState("Please click a button");
  const [selectedTopic, setSelectedTopic] = useState();

  // let tabContent = 'Please click a button';
  function handleSelect(selectedButton) {
    // tabContent = selectedButton;
    setSelectedTopic(selectedButton); //상태가 변경되므로로 컴포넌트는 자동으로 재렌더링
    // 출력해보면 변수가 업데이트 되었지만 UI 는 업데이트 안됨
    // react 컴포넌트 only one 딱 한번 실행 => 다시 실행하라고 알려야 함 => 솔루션이 state
    //console.log(selectedTopic); // 이벤트 발생시마다 실행
  }
  // 딱 한번만 실행
  console.log("APP COMPONENT EXECUTING");

  //2 변수 활용
  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
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
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            /> */}
            {/* 아래와 같이 효율적으로 표현 할 수 있음
          javascript의  ... 연산자(스프레드 연산자)
          */}
            {/* <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
            {/* map 을 이용해  더 동적이고 효율적으로 표현해본다 */}
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
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
            <TabButton  onSelect={() => handleSelect("components")} isSelected={selectedTopic === 'components'}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}
              isSelected={selectedTopic === 'jsx'}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}
              isSelected={selectedTopic === 'props'}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}
              isSelected={selectedTopic === 'state'}>State</TabButton>

            {/* attribute 사용해도 됨 : 두 방법 모두 가능 */}
            {/* <TabButton label="Components"></TabButton> */}
          </menu>
          {/* {selectedTopic} */}
          {/* 1.삼항연산자로 처리하는 방법 2. 변수활용 */}
          {/* {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
