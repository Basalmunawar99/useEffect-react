import { useEffect, useRef } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current){
        ref.current.focus();
      }
  });
 
  return (      
    <>
    <div>
        <label>Input:</label> <br />
        <input type="text" ref={ref} className='form-control'/>
        <h1>useEffect Hook Example</h1>
    </div>
    </>
  )
}

export default App
