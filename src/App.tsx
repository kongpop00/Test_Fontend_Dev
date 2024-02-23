

import './App.css'
import { Route, Routes } from "react-router";
import Home from './view/Home';
import Test1 from './view/Test1';
function App() {


  return (
    <>
       <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/test1" element={<Test1 />}/>

      </Routes>
    </>
  )
}

export default App
