import * as React from 'react';


function Countdown() {
  const [counter, setCounter] = React.useState(259200);

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <div className={"countdown"}>
      <div>{counter}</div>
    </div>
  );
}

export default Countdown