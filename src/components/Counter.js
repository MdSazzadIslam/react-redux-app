import React, { Component } from "react";
import "./Counter.css";

import { connect } from "react-redux";
import * as counterAction from "../actions/counterAction";
import counterReducer from "../reducers/counterReducer";

class Counter extends Component {
  render() {
    return (
      <div class="counter">
        <h1>{this.props.count}</h1>

        <p>
          <button onClick={() => this.props.incrementCount()}>Incrment</button>
          <button onClick={() => this.props.decrementCount()}>Decrement</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.counterReducer.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCount: () => dispatch(counterAction.incrementCount()),
    decrementCount: () => dispatch(counterAction.decrementCount()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
