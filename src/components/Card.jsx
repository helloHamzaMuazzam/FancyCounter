import { useState } from "react";
import CountBUtton from "./CountButton";
import Reset from "./Reset";
import Title from "./Title";
import Count from "./Count";

export default function Card() {
 const [count, setCount] = useState(0);

 const increment = () => setCount((c) => c + 1);
 const decrement = () => setCount((c) => Math.max(0, c - 1));
 const reset = () => setCount(0);

 return( <><div className="card">
  <Title/>
  <Count count={count}/>
  <Reset onReset={reset}/>
  <CountBUtton onDecrement={decrement} onIncrement={increment} isDecrementDisabled={count <= 0}/>
  </div>
  </>);
}