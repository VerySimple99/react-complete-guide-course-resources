import NewTask from "./NewTask";

export default function Tasks({ tasks, onAddTask, onDeleteTask }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project doesn't have any tasks yet.
        </p>
      )}
      <ul className="p-4 mt-8 rounded-md bg-stone-100">
        {tasks.length > 0 &&
          tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              {/* onClick={onDeleteTask(task.id)}는 함수의 결과값을 이벤트 핸들러로 전달하려고 합니다.
onClick={() => onDeleteTask(task.id)}는 함수 자체를 이벤트 핸들러로 전달합니다. */}
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDeleteTask(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
      </ul>
    </section>
  );
}
