import React from 'react'
import s from './color.module.css'
import classNames from 'classnames/bind';


const TodoList = ({ todos, removeTodo, statusChangeTodo }) => {


    const handleInputChange = (e) => {
        statusChangeTodo(e.target.id)
    }

    return (
        <>
            {todos && todos.map(item => (
                <div className={classNames(s[`priority${item.priority}`],
                    'todoItem', { 'todoItemDone': item.completed })}
                    key={item.id}
                >
                    <input
                        type='checkbox'
                        id={item.id}
                        name='complete'
                        onClick={handleInputChange}
                        defaultChecked={item.completed}
                    />
                    <div className={classNames('nameTodo',
                        { 'nameTodoDone': item.completed })}>
                        {item.text}
                    </div>

                    <div className='deleteIcon' title='delete'>
                        <p onClick={() => removeTodo(item.id)}>&#128465;</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default TodoList