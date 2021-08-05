import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import ActionCreators from './state';
import { State } from './state/reducers';

function App() {

  const dispatch = useDispatch();
  const { handleDeposit, handleBankrupt, handleWithDraw } = bindActionCreators(ActionCreators, dispatch);
  const state = useSelector((state: State) => state.bank);

  return (
    <div className="App">
      <p>{state}</p>
      <button onClick={() => handleDeposit(1000)}>DEPOSIT</button>
      <button onClick={() => handleWithDraw(500)}>WITHDRAW</button>
      <button onClick={() => handleBankrupt()}>BANKRUPT</button>
    </div>
  );
}

export default App;
