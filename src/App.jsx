
import './App.css';
import CounterClass from './components/CounterClass/CounterClass';
import CounterFunctional from './components/CounterFuncional/CounterFuncional';

function App() {

  const Contador ={
    valor :7,
    salto:2

  }
  return (
    <div>
     {/* <CounterClass valorInicial={2}/> */}
     <CounterFunctional  valorInicial = {Contador}/>

    </div>
  );
}

export default App;
