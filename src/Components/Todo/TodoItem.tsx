import React, { useState } from 'react'
import { CheckCircleFill, Trash2Fill } from 'react-bootstrap-icons';
import SubTaskModal from './SubTaskModal'

type Props = TodoProps & {
  updateTodo: (todo: ITodo) => void
  deleteTodo: (id: string) => void
  updateSubTaskTodo: (id: string, subTaskTodo: subTaskTodo) => void
  deleteSubTask: (id: string, subTaskId: string) => void
  completeSubTask: (id: string, subTaskId: string) => void
}

const Todo: React.FC<Props> = ({ todo, updateTodo, deleteTodo, updateSubTaskTodo, deleteSubTask, completeSubTask }) => {
  const [isShow, setIsShow] = useState(false);
  const checkTodo: string = todo.status ? `line-through` : ''
  const showingSubTasks = () => {
    return todo.subTasks.map((sTask: subTaskTodo,index) => {
      return <ul key={index} className='Card' style={{ marginBottom: '0rem' }}>
        <div className='Card--text' style={{ marginLeft: '1rem' }}>
          <li style={{ fontSize: '1.5rem', color: 'aqua', textDecoration: sTask.status ? 'line-through' : 'unset' }} >{sTask.subTaskName}</li>
          <span style={{ textDecoration: sTask.status ? 'line-through' : 'unset' }}>{sTask.subTaskDescription}</span>
        </div>
        <div className='Card--button'>
          <button
            onClick={() => completeSubTask(todo.id, sTask.subTaskId)}
            className={sTask.status ? `hide-button` : 'Card--button__done'}
            disabled={todo.status}
          >
            <CheckCircleFill fill={todo.status ? 'grey' : 'green'} />
          </button>
          <button
            onClick={() => deleteSubTask(todo.id, sTask.subTaskId)}
            className='Card--button__delete'
            disabled={todo.status}
          >
            <Trash2Fill fill={todo.status ? 'grey' : 'red'} />
          </button>
        </div>
      </ul>
    })
  }
  return (
    <div style={{ border: '2px solid #333333' }}>
      <div className='Card'>
        <div className='Card--text'>
          <h1 className={checkTodo}>{todo.name}</h1>
          <span className={checkTodo}>{todo.description}</span>
        </div>
        <div className='Card--button'>
          <button
            onClick={() => setIsShow(true)}
            className='Card--button__add'
          >
            Add Subtask +
          </button>
          <button
            onClick={() => updateTodo(todo)}
            className={todo.status ? `hide-button` : 'Card--button__done'}
          >
            Complete
          </button>
          <button
            onClick={() => deleteTodo(todo.id)}
            className='Card--button__delete'
          >
            Delete
          </button>
          {isShow ? <SubTaskModal setIsShow={setIsShow} updateSubTaskTodo={updateSubTaskTodo} id={todo.id} /> : null}
        </div>
      </div>
      {todo.subTasks.length ? showingSubTasks() : null}
    </div>
  )
}

export default Todo
