import Counter from "./components/Couter";
import { useCountStore } from "./store";

const App = () => {
  const { count } = useCountStore();

  return (
    <>
      Hello {count}
      <Counter />
    </>
  );
};

export default App;
