//...  "Rest Property" => flexible
export default function Section({ title,children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

// 위처럼 변경할 수 있다 ...  "Rest Property"

// export default function Section({ title, id, children }) {
//   return (
//     <section id={id}>
//       <h2>{title}</h2>
//       {children}
//     </section>
//   );
// }
