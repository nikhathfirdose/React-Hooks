import React, { Component } from "react";
// import Component1 from "../functional/component1";

import { connect } from "react-redux";
// import * as ACTION_TYPE from "../store/actions/action_type";
import * as ACTIONS from "../store/actions/actions";
class Container1 extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={() => console.log(this.props.stateprop1)}>
          {" "}
          Get State{" "}
        </button>
        <button onClick={() => this.props.action1()}>
          {" "}
          Dispatch Action 1{" "}
        </button>
        <button onClick={() => this.props.action2()}> Dispatch Action 2</button>
        <button onClick={() => this.props.action_creator1()}>
          {" "}
          Dispatch Action-creater 1
        </button>
        <button onClick={() => this.props.action_creator2()}>
          {" "}
          Dispatch Action-creator 2
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stateprop1: state.stateprop1,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    action1: () => dispatch(ACTIONS.SUCCESS),
    action2: () => dispatch(ACTIONS.FAILURE),
    action_creator1: () => dispatch(ACTIONS.success()),
    action_creator2: () => dispatch(ACTIONS.failure()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Container1);
