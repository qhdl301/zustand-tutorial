import { FC } from "react";
import { useCountStore } from "../store";
import { Button, Typograph } from "../components";

const CounterContainer: FC = () => {
  const { count, increment, decrement } = useCountStore();

  const handleIncrement = () => {
    increment(1);
  };

  const handleDecrement = () => {
    decrement(1);
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <Typograph variant="h2">LocalStorage Count : {count}</Typograph>
      <br />
      <Button onClick={handleIncrement}>증감</Button>
      <Button onClick={handleDecrement}>감소</Button>
    </div>
  );
};

export default CounterContainer;
