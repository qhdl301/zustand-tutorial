import { FC } from "react";
import { useCountStore } from "../store";
import Button from "./Button";

const Counter: FC = () => {
  const { increment, decrement } = useCountStore();

  const handleIncrement = () => {
    increment(1);
  };

  const handleDecrement = () => {
    decrement(1);
  };

  return (
    <>
      <Button onClick={handleIncrement}>증감</Button>
      <Button onClick={handleDecrement}>감소</Button>
    </>
  );
};

export default Counter;
