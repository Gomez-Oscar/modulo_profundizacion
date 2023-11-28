import React, { useReducer } from 'react';
import { counterReducer } from '../../reducers/counterReducer';
import '../miContador/MiContador.scss';

const MiContadorConUseReducer = () => {
  const [counter, counterDispatch] = useReducer(counterReducer, { count: 0 });

  const handleIncrement = () => {
    counterDispatch({ type: 'INCREMENT' });
  };

  const handleDecrement = () => {
    if (counter.count > 0) counterDispatch({ type: 'DECREMENT' });
  };

  return (
    <div className='mainContainer'>
      <button onClick={handleDecrement}>-</button>
      <span className='number'>{counter.count}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default MiContadorConUseReducer;
