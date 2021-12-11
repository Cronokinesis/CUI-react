import { Component, useEffect, useState } from 'react';

// class ClockHook extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//     console.log('initial');
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log('props =>', props);
//     console.log('state => ', state);
//     return { title: props.title };
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 1000);
//     console.log('Clock => componentDidMount');
//   }

//   componentDidUpdate() {
//     console.log('Clock => componentDidUpdate');
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//     console.log('Clock => componentWillUnmount');
//   }

//   tick() {
//     this.setState({
//       date: new Date(),
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

const ClockHook = () => {
  const [date, setDate] = useState(new Date());
  let timerId;
  const tick = () => {
    setDate(new Date());
  };
  useEffect(() => {
    console.log('Clock Hook => componentDidMount');
    timerId = setInterval(() => tick(), 1000);
    return () => {
      console.log('Clock Hook => componentWillUnmount');
      clearInterval(timerId);
    };
  }, []);

  useEffect(()=> {
    console.log('Clock Hook => componentDidUpdate');
  }, [date]);

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
};

export default ClockHook;
