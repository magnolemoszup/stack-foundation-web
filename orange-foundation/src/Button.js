import React, { useContext } from 'react'

import { ThemeContext } from "context/ThemeContext";

const Button = () => {

  const color = useContext(ThemeContext);

  return (
    <ThemeContext.Provider value="tomato">
      <button style={{backgroundColor: `${color}`}}>
        Button - Orange Foundation
      </button>
    </ThemeContext.Provider>
  );
}

export default Button;