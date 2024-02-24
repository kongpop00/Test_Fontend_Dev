

import './App.css'
import { Route, Routes } from "react-router";
import Home from './view/Home';
import Test_1 from './view/Test_1';
function App() {


  return (
    <>
       <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/test1" element={<Test_1 />}/>

      </Routes>
    </>
  )
}

export default App
