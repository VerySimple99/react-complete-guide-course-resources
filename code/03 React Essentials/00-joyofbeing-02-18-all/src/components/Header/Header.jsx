//   ./ 로 현재 디렉토리를 명시하는 것을 권장 
//   /assets   public 폴더의 자산에 접근
//   assets/  비추천 대부분의 번들러는 이를 노드 모듈이나 특별 구성된 경로로 해석하려고 시도
// import reactImg from '../../assets/react-core-concepts.png';
import reactImg from '../../assets/react_job.jpg';
import'./Header.css';

// crucial 결정적인 
const reactDescriptions = ['Fundamental','Crucial','Core'];

function genRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}
// 대부분 react project는 default export 를 사용함 
export default function Header() {
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