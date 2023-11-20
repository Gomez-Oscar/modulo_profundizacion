import React, { useState } from 'react';
import './miContador.scss';

const MiContador = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter - 1 >= 0) setCounter(counter - 1);
  };

  return (
    <div className='mainContainer'>
      <button onClick={handleDecrement}>-</button>
      <span className='number'>{counter}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default MiContador;
