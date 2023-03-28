import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import CVPage from "./pages/CV";
import Navbar from "./components/Nav";
import faviconUrl from "/logo1/favicon.ico"

export interface AppProps {}

const App: React.FC<AppProps> = (props) => {
  let link = document.getElementById("favicon") as HTMLLinkElement;
  if (!link) {
    link = document.createElement('link') as HTMLLinkElement;
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
  }
  link.href = faviconUrl;
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