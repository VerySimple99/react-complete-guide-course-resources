import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName]=useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  // React의 상태 업데이트는 비동기적으로 일어납니다. 여러 상태 업데이트가 연속해서 발생할 때, 직접 참조하는 방식은 최신 상태를 보장하지 못할 수 있습니다.
 //함수형 업데이트는 항상 최신 상태를 기반으로 업데이트합니다.
  function handleEditClick() {
   // setIsEditing( !isEditing ); // ==> true
    //setIsEditing( !isEditing ); // ==> false 예상하지만 그렇지 않음
    // 두 함수 모두 현재 isEditing state false 값을 이용하고 있음,,최신상태보장하지 않음. 아래처럼 함수 방식이 꼭 필요함 
    //함수형 업데이트는 항상 현재 상태를 매개변수로 받기 때문에 이전에 캡처된 값에 의존하지 않습니다.
    setIsEditing((editing) =>!editing);
  }
  
  function handleChange(event){
    //console.log(event);
    setPlayerName(event.target.value);
  }
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  //let btnCaption = 'Edit';
  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
   // btnCaption = 'Save';
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
