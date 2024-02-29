import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./view/Home";
import Test_1 from "./view/Test_1";
import Test_3 from "./view/Test_3";
import NotFound from "./view/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test1" element={<Test_1 />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/test3" element={<Test_3 />} />
      </Routes>
      <h1> </h1>
    </>
  );
}

export default App;
