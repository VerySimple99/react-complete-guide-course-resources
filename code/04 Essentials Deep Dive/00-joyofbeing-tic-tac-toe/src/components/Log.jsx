export default function Log({ turns }) {
  if (!turns || turns.length === 0) {
    return <ol id="log"></ol>;
  }

  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
}
