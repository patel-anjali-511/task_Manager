function Filter({ filter, setFilter }) {

  return (
    <div className="filter">

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">All Tasks</option>
        <option value="todo">Todo</option>
        <option value="in_progress">In Progress</option>
        <option value="done">Done</option>
      </select>

    </div>
  );
}

export default Filter;