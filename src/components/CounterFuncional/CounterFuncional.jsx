import React, {useState} from 'react'
import './Counter.css'
const CounterFunctional = ({valorInicial}) => {
const {salto, valor} = valorInicial
    
const [counter, setCounter] = useState (valor)
const [contador, setContador] = useState ("Mi contador")

const incrementar = () => {
   setCounter(counter + salto)
}
const reducir = ()=>{
    setCounter(counter - salto)
}
const resetear = () =>{
    setCounter (valor)
}

setTimeout(() => {
    setContador("¡Sorpresa!")
}, 3000);

  return (
<div className="contador">
           <div className="box-left"> <h2>{contador}</h2>
            <div className="value">{counter}</div>
            <br/></div>
        <div className="buttons">
            <button onClick={incrementar}>⬆</button>
            <button onClick={resetear}>🔄</button>
            <button onClick={reducir}>⬇</button>
            
        </div>
        </div>


  )
}

export default CounterFunctional