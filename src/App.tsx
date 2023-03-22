import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import CVPage from "./pages/CV";
import Navbar from "./components/Nav";

import styled from "styled-components";

export interface AppProps {}

const App: React.FC<AppProps> = (props) => {
  
  return (
  <BrowserRouter>
    <Navbar extend={false}/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='projects' element={<ProjectsPage />} />
      <Route path='cv' element={<CVPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;