import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className='border-2 m-2 p-3 rouded-lg'>
        <h1 >Counter: {this.state.count}</h1>
        <button onClick={this.increment} className='border-2 p-1 rounded-lg m-2 bg-blue-400'>Increment</button>
        <button onClick={this.decrement} className='border-2 p-1 rounded-lg m-2 bg-red-400'>Decrement</button>
      </div>
    );
  }
}

export default Counter;