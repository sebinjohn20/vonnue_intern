import logo from './logo.svg';
import './App.css';
import UseState from './Components/UseState/UseState';
import UseReducer from './Components/UseReducer/UseReducer';
import ObjectUseState from './Components/ImmutableState/ObjectUseState';
import ArrayUseState from './Components/ImmutableState/ArrayUseState';
import ParentOne from './Components/Optimization/ParentOne';
import ChildOne from './Components/Optimization/ChildOne';

function App() {
  return (
    <div className="App">
      <ParentOne>
        <ChildOne></ChildOne>
      </ParentOne>
    </div>
  );
}

export default App





















