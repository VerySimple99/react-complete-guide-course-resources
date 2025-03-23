// import { useState } from "react";

export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
/* 
안녕하세요! 😊 오늘도 존재함의 기쁨을 느끼며 시작하는 아침이 되셨길 바랍니다. 

해당 코드에서 스프레드 연산자(`...`)에 대해 설명해 드리겠습니다. 이 부분은 React에서 상태 업데이트를 할 때 매우 중요한 개념입니다. 🌱

## `...` 스프레드 연산자 설명

```javascript
const updateBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
```

이 코드는 2차원 배열의 깊은 복사(deep copy)를 만드는 과정입니다. 차근차근 분석해 보겠습니다:

### 1. 스프레드 연산자(`...`)의 기본 기능
스프레드 연산자는 배열이나 객체의 요소들을 펼쳐서 새로운 배열이나 객체에 넣어주는 역할을 합니다. 이를 통해 원본 데이터를 직접 수정하지 않고 새로운 복사본을 만들 수 있습니다. 이것은 React의 불변성(immutability) 원칙을 지키는 데 필수적입니다. 🌱

### 2. 코드 분석 단계별로 살펴보기

**바깥쪽 스프레드 연산자**: `[...prevGameBoard.map()]`
- 이 부분은 `map()`을 통해 변환된 새 배열을 펼쳐서 새로운 배열을 만듭니다.

**내부 map 함수**: `prevGameBoard.map(innerArray => [...innerArray])`
- 각 내부 배열(`innerArray`)에 대해 스프레드 연산자를 사용해 새 배열을 만듭니다.
- 이렇게 하면 각 행(row)의 복사본이 생성됩니다.

### 3. 왜 이렇게 복잡하게 복사하나요?

JavaScript에서 배열과 객체는 참조 타입입니다. 단순히 `const updateBoard = prevGameBoard`와 같이 할당하면, `updateBoard`는 `prevGameBoard`와 같은 메모리 주소를 참조하게 됩니다. 따라서 `updateBoard`를 변경하면 `prevGameBoard`도 함께 변경됩니다. 

이것은 React의 상태 관리 원칙에 위배됩니다. React는 이전 상태와 새 상태를 비교하여 변경 사항을 감지하고 렌더링합니다. 따라서 항상 새로운 객체나 배열을 생성해야 합니다. 🧩

### 4. 간단한 예시로 이해하기

```javascript
// 1차원 배열의 복사
const original = [1, 2, 3];
const copy = [...original]; // [1, 2, 3]의 새로운 복사본

// 2차원 배열의 복사 (얕은 복사)
const matrix = [[1, 2], [3, 4]];
const shallowCopy = [...matrix]; // 외부 배열만 복사됨

// 2차원 배열의 복사 (깊은 복사)
const deepCopy = matrix.map(row => [...row]); // 내부 배열까지 모두 복사됨
```

### 5. 틱택토 게임에서의 적용

이 코드는 틱택토 게임 보드의 상태를 업데이트하고 있습니다. 사용자가 특정 칸을 클릭하면 해당 위치에 'X'를 표시하려고 합니다. 새로운 게임 보드 상태를 만들기 위해 기존 보드의 깊은 복사본을 만든 후, 선택된 위치를 'X'로 업데이트합니다. 

이렇게 하면 React는 이전 상태와 새 상태가 다르다는 것을 인식하고 UI를 업데이트합니다. 🎮

정리하자면, 스프레드 연산자를 사용한 이 복잡해 보이는 코드는 React에서 상태의 불변성을 유지하면서 2차원 배열의 깊은 복사본을 만드는 중요한 패턴입니다. 이렇게 함으로써 React의 상태 관리 메커니즘을 효과적으로 활용할 수 있습니다. 💡

이 개념을 이해셨다면, AI Agent Engineering을 위한 중요한 React 상태 관리 개념 하나를 마스터하신 것입니다! 😊

---

"The power for creating a better future is contained in the present moment: You create a good future by creating a good present." - Eckhart Tolle

"더 나은 미래를 창조하는 힘은 현재의 순간에 담겨 있습니다: 좋은 현재를 창조함으로써 좋은 미래를 창조합니다." - 엑하르트 톨레 🌟
*/
