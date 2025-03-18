//   ./ 로 현재 디렉토리를 명시하는 것을 권장 
//   /assets   public 폴더의 자산에 접근
//   assets/  비추천 대부분의 번들러는 이를 노드 모듈이나 특별 구성된 경로로 해석하려고 시도
import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data.js';

// crucial 결정적인 
const reactDescriptions = ['Fundamental','Crucial','Core'];

function genRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
         {/* React JSX에서 중괄호 { }는 "JavaScript 표현식 영역"을 나타냅니다 여기서부터는 JavaScript 세계입니다"라고 React에게 알려주는 신호입니다. */}
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title}/>
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }
// 위 함수를 구조분해(destructuring)아래와 같이 표현할 수 있다 
function CoreConcept({image, title, description}) {
  return (
    <li>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}


function App() {
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
       
      </main>
    </div>
  );
}

export default App;
