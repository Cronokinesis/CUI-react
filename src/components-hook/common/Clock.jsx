import { useEffect, useState } from 'react';

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

  useEffect(() => {
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
