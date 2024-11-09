import { useRef } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const ref = useRef<HTMLInputElement>(null);

  if (ref.current){
    ref.current.focus();
  }

  return (      
    <>
    <div>
        
    </div>
    </>
  )
}

export default App
