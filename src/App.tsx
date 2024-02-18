import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Weihnachtsgruss from "./pages/Weihnachtsgruss";

const App: FC = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="weihnachtsgruss" element={<Weihnachtsgruss />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default App;
