import React from 'react'
import Button from './Button.js'

const styles = {
  backgroundColor: 'tomato', 
  display: 'flex', 
  flexDirection: 'column', 
  justifyItems: 'center', 
  alignItems: 'center',
  justifyContent: 'center'
}

const App = () => {
  return (
    <div style={{...styles, height: '50vh'}}>
      <h2>Orange Foundation!</h2>
      <form action="">
        <div style={styles}>
          <label htmlFor="">
            Name
            <input type="text"/>
          </label>
          <label htmlFor="">
            Pass
            <input type="text"/>
          </label>
          <Button />
        </div>
      </form>
    </div>
  );
}

export default App;