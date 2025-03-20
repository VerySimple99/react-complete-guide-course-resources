export default function TabButton({ children, isSelected, ...props }) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
// 위처럼 Rest Property
// export default function TabButton({ children, onSelect, isSelected }) {
//   console.log('TABBUTTON COMPONENT EXECUTING');
//   return (
//     <li>
//       <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
//         {children}
//       </button>
//     </li>
//   );
// }
