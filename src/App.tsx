import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CounterContainer } from "./container";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CounterContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
