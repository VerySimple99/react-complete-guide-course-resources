import { useState } from 'react';


import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import { Examples } from './components/Examples.jsx';

function App() {

  return (
    // 하나의 값만 반환할 수 있음 별도의 스타일이 필요없으면 
    // <div> => <Fragment> => <>
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    {/* </div> */}
    </>
  );
}

export default App;
