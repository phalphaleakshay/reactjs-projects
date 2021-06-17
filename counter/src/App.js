import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { incrementNumber, decrementNumber } from "./actions/index";
function App() {
  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch();
  return (
  <div className="App">
        <div className="container">
  
        <h1>Increment/decrement counter</h1>
        <div className="quantity">
          <a className="quantity__minus" onClick = {() => dispatch(decrementNumber())}><span>-</span></a>
          <input name="quantity" type="text" className=" quantity__input" value={myState} />
          <a className="quantity__plus" onClick = {() => dispatch(incrementNumber())}><span>+</span></a>
        </div>  
</div>
</div>
  );
}

export default App;
