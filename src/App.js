import React from 'react';
import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter, multiplyCounter, divisionCounter } from './redux/Counter/counter.actions';
import './App.css';

function App(props) {
  return (
    <div class="container>">
    <div className="App">
      <h1>Count :{props.count}</h1>
      <button onClick={()=> props.increaseCounter()}>Increment</button>
      <button onClick={()=> props.decreaseCounter()}>Decrement</button>
      <button onClick={()=> props.multiplyCounter()}>Mul</button>
      <button onClick={()=> props.divisionCounter()}>Div</button>

</div>
    </div>
  );
}

const mapStateToProps = state => {
 return{
  count: state.counter.count,
 }
}
const mapDispatchToProps = dispatch => {
  return{
    increaseCounter:() =>dispatch(increaseCounter()),
    decreaseCounter:() =>dispatch(decreaseCounter()),
    multiplyCounter:()=> dispatch(multiplyCounter()),
    divisionCounter:()=> dispatch(divisionCounter()),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);