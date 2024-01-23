import { PureComponent } from 'react';
export default class PureComponents extends PureComponent {

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
  } 
};

render () {
  console.log("This is a Pure Component")
  const { count } = this.state;

  return (
    <div className='container'>
    <h2>Pure Components</h2>
    <h1>{count}</h1>
    <button className='toggle' onClick={this.handleToggle}>Toggle</button>
    <button className='counter' onClick={this.handleCounter}>Counter</button>
    </div>
  )
}
}
