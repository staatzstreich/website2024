import { FC, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NoMatch from "./pages/NoMatch";

const Home = lazy(() => import("./pages/Home"));
const Weihnachtsgruss = lazy(() => import("./pages/Weihnachtsgruss"));

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
