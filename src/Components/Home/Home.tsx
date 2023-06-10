import styled from "styled-components";
import TodoItem from '../Todo/TodoItem'
import AddTodo from '../Todo/AddTodo'
import React, { useState } from 'react'
// import Homepageimage from '../../images/home-page.png'

export const HomePageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 39%;
  transform: translateX(-50%);
  color: black;
  font-size: 30px;
  font-weight: bold;

`;

export const Home = () => {

    const [todos, setTodos] = useState<ITodo[]>([])

    const handleSaveTodo = (e: React.FormEvent, formData: ITodo): void => {
        e.preventDefault()
        const listOfTodos = [...todos, Object.assign(formData, { id: Date.now(), status: false, subTasks: [] })];
        setTodos(listOfTodos)
    }

    const handleUpdateTodo = (todo: ITodo): void => {
        const updatedTodos = todos.map(obj =>
            obj.id === todo.id ? { ...obj, status: true } : obj);
        setTodos(updatedTodos)
    }

    const handleDeleteTodo = (id: string): void => {
        const updatedTodos = todos.filter((item: any) => item.id !== id);
        setTodos(updatedTodos)
    }

    const handleSubTaskTodo = (id: string, subTaskTodo: subTaskTodo): void => {
        const updatedTodos = todos.map(obj =>
            obj.id === id ? { ...obj, subTasks: [...obj.subTasks, subTaskTodo] } : obj);
        setTodos(updatedTodos)
    }

    const handleDeleteSubTask = (id: string, subTaskId: string): void => {
        const updatedTodos = todos.map(obj =>
            obj.id === id ? { ...obj, subTasks: obj.subTasks.filter((stask) => stask.subTaskId !== subTaskId) } : obj);
        setTodos(updatedTodos)
    }

    const handleCompleteSubTask = (id: string, subTaskId: string): void => {
        const updatedSubTasks = todos.filter((todo) => todo.id === id)[0].subTasks;
        const updatedSubTasksInfo = updatedSubTasks.map(obj =>
            obj.subTaskId === subTaskId ? { ...obj, status: true } : obj);
        const updatedTodos = todos.map(obj =>
            obj.id === id ? { ...obj, subTasks: updatedSubTasksInfo } : obj);
        setTodos(updatedTodos)
    }
    return (
        <main className='todo'>
            <h1>My Todos</h1>
            <AddTodo saveTodo={handleSaveTodo} />
            {todos.map((todo: ITodo) => (
                <TodoItem
                    key={todo.id}
                    updateTodo={handleUpdateTodo}
                    deleteTodo={handleDeleteTodo}
                    updateSubTaskTodo={handleSubTaskTodo}
                    deleteSubTask={handleDeleteSubTask}
                    completeSubTask={handleCompleteSubTask}
                    todo={todo}
                />
            ))}
        </main>
    );
};
export default Home;