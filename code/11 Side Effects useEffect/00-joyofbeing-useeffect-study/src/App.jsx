import { useRef, useState, useEffect } from "react";

import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import { sortPlacesByDistance } from "./loc.js";
const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
const storedPlaces = storedIds.map((id) =>
  AVAILABLE_PLACES.find((place) => place.id === id)
);
function App() {
  //const modal = useRef();
  const selectedPlace = useRef();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);
  /* 
  이 코드가 무한 루프를 발생시키는 과정은 다음과 같습니다:
컴포넌트가 렌더링됩니다.
렌더링 중에 navigator.geolocation.getCurrentPosition()이 호출됩니다.
위치 정보를 받아온 후 setAvailablePlaces()로 상태를 업데이트합니다.
상태 업데이트는 컴포넌트의 리렌더링을 유발합니다.
컴포넌트가 다시 렌더링되면서 navigator.geolocation.getCurrentPosition()이 다시 호출됩니다.
이 과정이 계속 반복되어 무한 루프가 발생합니다. 🔄
이 문제를 해결하려면 부작용 코드를 useEffect 훅 안에 넣고, 의존성 배열을 빈 배열([])로 설정하여 컴포넌트가 처음 마운트될 때만 실행되도록 해야 합니다:
  무한 루프의 흐름은 이렇습니다:

컴포넌트 렌더링 시작
navigator.geolocation.getCurrentPosition() 호출
위치 정보 콜백에서 setAvailablePlaces() 호출
console.log('test') 실행
렌더링 완료
상태 업데이트로 인한 리렌더링 트리거
다시 1번부터 반복

상태 업데이트는 마치 우편함에 편지를 넣는 것과 같습니다. 편지를 넣었다고 해서 바로 배달되는 것이 아니라, 정해진 시간에 한꺼번에 수거되어 배달되는 것과 비슷합니다. 
  */
  // side effect
  // navigator.geolocation.getCurrentPosition((position) => {
  //   const sortedPlaces = sortPlacesByDistance(
  //     AVAILABLE_PLACES,
  //     position.coords.latitude,
  //     position.coords.longitude
  //   );
  //   setAvailablePlaces(sortedPlaces);//상태 업데이트를 예약(schedule)합니다.
  // });
  /* 
  useEffect는 React 컴포넌트에서 사이드 이펙트(side effect)를 수행하는 훅입니다. 여기서 사이드 이펙트란 컴포넌트 렌더링 이후에 발생하는 모든 작업을 의미합니다. 예를 들어, 다음과 같은 작업들이 사이드 이펙트에 해당합니다.

API 호출
DOM 조작
이벤트 리스너 등록/제거
타이머 설정/해제
데이터 구독/해지
  */
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );
      setAvailablePlaces(sortedPlaces);
    });
  }, []); // 반드시 필요!. 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행됨을 의미합니다

  function handleStartRemovePlace(id) {
    setModalIsOpen(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }
  /* 
avaScript 배열 메소드로, 배열 내 최소한 하나의 요소가 주어진 조건을 만족하는지 확인합니다. 하나라도 조건을 만족하면 true를, 아무것도 만족하지 않으면 false를 반환합니다.
*/
  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });
    // 새로고침시에도 리스트가 유지되도록 저장

    const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    if (storedIds.indexOf(id) === -1) {
      // JSON.stringify 저장가능한 문자열로 변경
      localStorage.setItem(
        "selectedPlaces",
        JSON.stringify([id, ...storedIds])
      );
    }
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    //modal.current.close();
    setModalIsOpen(false);
    const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    localStorage.setItem(
      "selectedPlaces",
      JSON.stringify(storedIds.filter((id) => id !== selectedPlace.current))
    );
  }

  return (
    <>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText={"Sorting places by distance"}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
