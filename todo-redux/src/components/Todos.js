import React, { useEffect } from 'react';
import { fetchTodos } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import TodoCard from './TodoCard';

const Todos = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos()); // dispatch this action
    // eslint-disable-next-line
  }, []);

  const renderTodoCards = todos.map((todo) => <TodoCard key={todo.id} todo={todo}/>);

  return (
    <div>
      {renderTodoCards}
    </div>
  )
}

export default Todos;