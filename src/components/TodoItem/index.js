import './index.css'

const TodoItem = props => {
  const {todoList, onDeleteTodo} = props
  const {title, id} = todoList

  const onDelete = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="todo-item">
      <p className="todo-title">{title}</p>
      <button className="delete-button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
