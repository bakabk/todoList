import React from 'react';

import { ITodo } from './interfaces';

type TodoListType = {
    todos: ITodo[],
    onDeleteTodo(id: number): void,
    toggleCompleted(id: number): void
}

declare var confirm: (text: string) => boolean

const TodoList: React.FC<TodoListType> = (props) => {
    const handleClick = (event: React.SyntheticEvent<HTMLElement>) => {
        const id = event.currentTarget.dataset.todoId;
        props.toggleCompleted(Number(id));
    }

    const handleDelete = (event: React.SyntheticEvent<HTMLElement>) => {
        const needDelete = confirm('Вы действительно хотели удалить данную запись?');
        if (needDelete) {
            const id = event.currentTarget.dataset.todoId;
            props.onDeleteTodo(Number(id));
        }
    }

    const list = props.todos.map(el => {
        const {id} = el;
        const { completed, text } = el;

        return <li key={id} className="todo-wrapper">
                <label data-todo-id={id} 
                    htmlFor="todo" 
                    className="todo_checkbox" 
                    onClick={handleClick}
                >
                    <input type="checkbox"
                        checked={completed}
                    />
                    <span className="todo_text">{text}</span>
                </label>
                <i className="material-icons red-text"
                    data-todo-id={id}
                    onClick={handleDelete}
                >delete</i>
        </li>
    });

    return <ul>
        {list}
    </ul>;
}

export default TodoList;