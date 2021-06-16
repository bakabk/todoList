import React, { useState, useEffect } from 'react';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';
import { ITodo } from '../interfaces';

const Main: React.FC = (props) => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const handleAddTask = (task: string): void => {
        setTodos(prevState => {
            const newTodo: ITodo = {
                text: task,
                id: new Date().getTime(),
                completed: false
            }

            return [newTodo, ...prevState];
        });
    }

    const handleDeleteTodo = (id: number): void => {
        setTodos(prevState => prevState.filter(todo => todo.id !== id));
    }

    const toggleCompleted = (id: number): void => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }

            return todo;
        });

        setTodos(newTodos);
    }

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
        setTodos(todos);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return <>
        <div className="container">
            <TodoForm onAddTask={handleAddTask} />
            <TodoList todos={todos}
                onDeleteTodo={handleDeleteTodo}
                toggleCompleted={toggleCompleted}
            />
        </div>
    </>;
}

export default Main;