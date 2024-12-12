import { FC } from "react";
import { useCountStore } from "../store";
import { Button } from "../components";

const CounterContainer: FC = () => {
  const { count, increment, decrement } = useCountStore();

  const handleIncrement = () => {
    increment(1);
  };

  const handleDecrement = () => {
    decrement(1);
  };

  return (
    <>
      Hello {count}
      <Button onClick={handleIncrement}>증감</Button>
      <Button onClick={handleDecrement}>감소</Button>
    </>
  );
};

export default CounterContainer;
