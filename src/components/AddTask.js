import React from 'react'

export const AddTask = ({ taskList, setTasklist, task, setTask }) => {
  const handleSubmit = e => {
    e.preventDefault()

    if (task.id) {
      const date = new Date()
      const updateTasklist = taskList.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : todo
      )
      setTasklist(updateTasklist)
    } else {
      const date = new Date()
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      }
      setTasklist([...taskList, newTask])
      e.target.task.value = ''
    }
  }

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={task.name}
          autoComplete="off"
          placeholder="Manage Task"
          maxLength="25"
          onChange={e => setTask({...task, name: e.target.value})}
        />
        <button type="submit">Add</button>
      </form>
    </section>
  )
}
