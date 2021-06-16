import React, { useRef } from 'react';

interface ITotoForm {
    onAddTask(task: string): void;
}

const TotoForm: React.FunctionComponent<ITotoForm> = props => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const {onAddTask} = props;

        if (event.key === "Enter") {
            onAddTask(inputRef.current!.value);
            inputRef.current!.value = '';
        }

    }

    return <div className="todo-from input-field">
        <input
            ref={inputRef}
            id="text"
            name="text"
            onKeyPress={handleKeyPress}
        />
        <label htmlFor="text" className="active">Введите название дела</label>
    </div>;
}

export default TotoForm;