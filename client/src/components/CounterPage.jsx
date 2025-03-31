import { useState, useEffect } from "react";
import Counter from "./Counter";

function CounterPage() {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }


  useEffect(()=>{
    console.log('hei')
    // fetche data
    // sette state
  }, [count])



  return (
    <>
      <h1>count: {count}</h1>
      <Counter onHandleCount={handleCount} />
    </>
  );
}

export default CounterPage;
