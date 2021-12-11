import { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    console.log('initial');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('props =>', props);
    console.log('state => ', state);
    return { title: props.title };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    console.log('Clock => componentDidMount');
  }

  componentDidUpdate() {
    console.log('Clock => componentDidUpdate');
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log('Clock => componentWillUnmount');
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;
