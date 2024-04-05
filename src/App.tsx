import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './reducers';

type Props= {
  onIncrement : () => void;
  onDecrement : () => void;
}

function App({onIncrement, onDecrement}:Props) {
  const dispatch = useDispatch();

  const counter = useSelector((state:RootState)=>state.counter);
  const todos: string[] = useSelector((state:RootState)=> state.todos);

  const [todoValue, setTodoValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setTodoValue(e.target.value);
  }

  const addTodo = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      text: todoValue
    });
    setTodoValue("");
  }
  return (
    <div className="App">
      Clicked: {counter} times
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <div>
        <ol>
          {todos.map((todo, index)=>
           <li key={index}>{todo}</li>
          )}
        </ol>

        <form onSubmit={addTodo}>
          <input value={todoValue} onChange={handleChange} />
          <input type="submit"/>
        </form>
      </div>
    </div>
  );
}

export default App;
