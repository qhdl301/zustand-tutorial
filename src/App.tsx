import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GuestBookContainer, CounterContainer } from "./container";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GuestBookContainer />} />
          <Route path="/counter" element={<CounterContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
