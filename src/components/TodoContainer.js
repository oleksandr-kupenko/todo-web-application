import React, { useState } from 'react';
import FilterSearch from './FilterSearch';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  const [filterValue, setfilterValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [sorthValue, seteSortValue] = useState('');

  const addTodo = (todoValue, priorityValue) => {
    if (todoValue !== '') {
      let newTodo = {
        text: todoValue,
        id: Math.floor(Math.random() * 10000),
        priority: +priorityValue,
        completed: false,
      };
      setTodos([newTodo, ...todos]);
    }
  };

  const sortTodos = (todos) => {
    let todosSorted = [...todos];
    if (sorthValue === 'ascending') {
      todosSorted.sort((a, b) => (a.priority > b.priority ? 1 : b.priority > a.priority ? -1 : 0));
      return todosSorted;
    }
    if (sorthValue === 'descending') {
      todosSorted.sort((a, b) => (a.priority < b.priority ? 1 : b.priority < a.priority ? -1 : 0));
      return todosSorted;
    }
    return todos;
  };

  const filterSearchTodos = (todos) => {
    console.log();
    let todosFiltered = [...todos];
    if (filterValue || searchValue) {
      if (searchValue) {
        todosFiltered = todos.filter((item) => item.text.includes(searchValue));
      }
      if (filterValue) {
        todosFiltered = todosFiltered.filter((item) => +item.completed === +filterValue);
      }
      return todosFiltered;
    }
    return todos;
  };

  const removeTodo = (id) => {
    const newTodoList = todos.filter((item) => item.id !== id);
    setTodos(newTodoList);
  };

  const statusChangeTodo = (id) => {
    let newTodoList = [];
    todos.forEach((item, index) => {
      newTodoList[index] = todos[index];
      if (item.id === +id) {
        newTodoList[index].completed = !todos[index].completed;
      }
    });
    setTodos(newTodoList);
    console.log(newTodoList);
  };

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <FilterSearch
        filterValue={filterValue}
        searchValue={searchValue}
        setfilterValue={setfilterValue}
        setSearchValue={setSearchValue}
        sorthValue={sorthValue}
        seteSortValue={seteSortValue}
      />
      <TodoList
        todos={sortTodos(filterSearchTodos(todos))}
        removeTodo={removeTodo}
        statusChangeTodo={statusChangeTodo}
      />
    </>
  );
};

export default TodoContainer;
