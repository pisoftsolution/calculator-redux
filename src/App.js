import React, { useState } from 'react';
import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter, multiplyCounter, divisionCounter } from './redux/Counter/counter.actions';
import { Button } from 'react-bootstrap';
import './App.css';
function App(props) {
const [count, setCount] = useState({ input1: 0, input2: 0 })
  return (
    <div className="App">
      <h3>Total : {props.count}</h3>
      <div className="inpt">
      <label>First value</label>
      <input type="number" name="input1" required onChange={(e) => {
        setCount({
          ...count,
          [e.target.name]: e.target.value
        })
      }}>
      </input>
      <label>Second value </label>
      <input type="number" name="input2" required onChange={(e) => {
        setCount({
          ...count,
          [e.target.name]: e.target.value
        })
      }}>
      </input>
      </div>
      <div class="butn">
        <div class="box" id="set">
      <Button className="btn1" onClick={()=>props.increaseCounter(count)}>Addition</Button>
      <Button className="btn2" onClick={()=>props.decreaseCounter(count)}>Subtraction</Button><br></br>
      <Button className="btn3" onClick={()=>props.multiplyCounter(count)}>Multiplication</Button><br></br>
      <Button className="btn4" onClick={()=>props.divisionCounter(count)}>Division</Button><br></br>
      </div>
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
    increaseCounter:(count) =>dispatch(increaseCounter(count)),
    decreaseCounter:(count) =>dispatch(decreaseCounter(count)),
    multiplyCounter:(count)=> dispatch(multiplyCounter(count)),
    divisionCounter:(count)=> dispatch(divisionCounter(count)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);