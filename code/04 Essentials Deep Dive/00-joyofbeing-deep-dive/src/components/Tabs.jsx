// JSX slot( 구멍 ) 방식이라고 함. 기본값을 줄 수 있음 
export default function Tabs({ children, buttons, ButtonsContainer = 'menu'}) { 
  //const ButtonsContainer = buttonsContainer;
  return <>
    <ButtonsContainer>
      {buttons}
    </ButtonsContainer>
    {children}
  </>;
}
