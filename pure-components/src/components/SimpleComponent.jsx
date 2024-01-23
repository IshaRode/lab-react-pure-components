import { Component } from 'react'
export default class SimpleComponent extends Component {

  constructor() {
    super();
    this.state = {
        count: 0,
        toggle: false
    };
}

handleToggle = () => {
  this.setState((prev) => ({
      toggle: !prev.toggle
  }));
};

handleCounter = () => {
  const { toggle } = this.state;
  if (toggle) {
    this.setState((prevState) => ({ 
    count: prevState.count + 1
   }));
  } else {
    this.setState({count : this.state.count})
  }
};

render () {
  console.log("This is a Simple Component")
  const { count } = this.state;

  return (
    <div className='container'>
    <h2>Simple Components</h2>
    <h1>{count}</h1>
     <button className='toggle' onClick={this.handleToggle}>Toggle</button>
     <button className='counter' onClick={this.handleCounter}>Counter</button>
       </div>
    )
  }
}
