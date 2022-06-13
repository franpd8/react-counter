import React, { Component } from "react";


export default class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
        counter: this.props.valorInicial,
      };
  }
  incrementar = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {

    return (
        <div className="contador">
           <div className="box-left"> <h2>Mi contador</h2>
            <div className="value">{this.state.counter}</div>
            <br/></div>
        <div className="buttons">
            <button onClick={this.incrementar}>¡Reduce!</button>
            <button onClick={this.incrementar}>Resetea</button>
            <button onClick={this.incrementar}>¡Incrementa!</button>
        </div>
        </div>
        )

  }
}
