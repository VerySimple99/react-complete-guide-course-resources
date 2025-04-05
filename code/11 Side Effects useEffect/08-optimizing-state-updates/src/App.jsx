import { useRef, useState, useEffect, useCallback } from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc.js';

const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
const storedPlaces = storedIds.map((id) =>
  AVAILABLE_PLACES.find((place) => place.id === id)
);

function App() {
  const selectedPlace = useRef();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );

      setAvailablePlaces(sortedPlaces);
    });
  }, []);

  function handleStartRemovePlace(id) {
    setModalIsOpen(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    if (storedIds.indexOf(id) === -1) {
      localStorage.setItem(
        'selectedPlaces',
        JSON.stringify([id, ...storedIds])
      );
    }
  }
/*
  useCallback은 함수의 재사용을 위해 사용되는 훅이며, 특히 자식 컴포넌트에게 함수 props를 전달할 때 불필요한 리렌더링이나 useEffect의 불필요한 실행을 방지하여 성능을 최적화하는 데 도움을 줍니다. App.jsx 코드에서는 handleRemovePlace 함수를 useCallback으로 감싸서 DeleteConfirmation 컴포넌트가 불필요하게 다시 렌더링되거나 useEffect가 불필요하게 실행되는 것을 막기 위해 사용된 것이라고 이해하시면 됩니다! 👍
  하단부에 구체적 설명 있음 
*/ 
  const handleRemovePlace = useCallback(function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setModalIsOpen(false);

    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
    localStorage.setItem(
      'selectedPlaces',
      JSON.stringify(storedIds.filter((id) => id !== selectedPlace.current))
    );
  }, []);

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
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText="Sorting places by distance..."
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
/*
  DeleteConfirmation 컴포넌트의 타이머는 처음 마운트될 때 설정되고, useEffect가 다시 실행되지 않으므로 계속해서 처음 설정된 onConfirm 함수 (처음 렌더링 시점의 handleRemovePlace)를 3초 후에 호출하려고 시도할 것입니다.

App 컴포넌트가 다시 렌더링되더라도, handleRemovePlace 함수가 새로운 객체로 생성되는 것 자체는 DeleteConfirmation 컴포넌트의 이미 설정된 타이머 동작에 직접적인 영향을 주지 않습니다. 타이머는 이미 특정 함수를 호출하도록 예약되어 있기 때문입니다.

하지만, useCallback을 사용하는 것에는 중요한 이유가 있습니다: 성능 최적화! 🚀

비록 기능적으로는 동일하게 작동할 수 있지만, useCallback을 사용하는 것은 다음과 같은 이점을 제공합니다.

불필요한 리렌더링 방지: DeleteConfirmation 컴포넌트가 React.memo로 감싸져 있다면, onConfirm props가 useCallback 덕분에 변경되지 않아 불필요한 리렌더링을 막을 수 있습니다.
예측 가능한 동작: useCallback을 사용하여 함수 props의 참조를 안정화시키면, 자식 컴포넌트의 useEffect가 불필요하게 자주 실행되는 것을 방지하여 예측 가능하고 효율적인 동작을 만들 수 있습니다.
결론:

현재 코드의 기능적인 목적만 고려한다면, DeleteConfirmation의 useEffect에 []를 넣고 App에서 useCallback을 제거해도 동일하게 3초 후에 handleRemovePlace가 호출되는 동작을 할 것입니다.

하지만, 더 나은 성능과 유지보수를 위해서는 useCallback을 사용하여 함수 props의 참조를 안정화시키고, 자식 컴포넌트의 useEffect 의존성 배열에 해당 함수를 명시하는 것이 좋습니다. 이는 불필요한 리렌더링을 방지하고 코드의 의도를 명확하게 보여주기 때문입니다.
*/