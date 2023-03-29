import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import CVPage from "./pages/CV";
import Navbar from "./components/Nav";
import faviconUrl from "/logo1/favicon.ico";
import { ColourScheme } from "./assets/colours";
import useColourStore from "./components/ColourScheme";
import { useEffect } from "react";



const App: React.FC = () => {

  let setColourLightGreen = useColourStore((state) => state.changeToLightGreen)
  let mainLight = useColourStore((state) => state.mainLight)
  let mainDark = useColourStore((state) => (state.mainDark))

  useEffect(() => {
    setColourLightGreen()
  }, [])  

  // Setting the favicon... 
  let link = document.getElementById("favicon") as HTMLLinkElement;
  if (!link) {
    link = document.createElement('link') as HTMLLinkElement;
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
  }
  link.href = faviconUrl;

  // Setting the background colour...
  let theBody = document.getElementById('pageBody') as HTMLElement;
  if (!theBody) {
    theBody = document.createElement('body') as HTMLElement;
  }
  theBody.style.backgroundColor = mainLight;

  return ( 
  <HashRouter>
    <Navbar backgroundColour={mainDark} extend={false}/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='projects' element={<ProjectsPage />} />
      <Route path='cv' element={<CVPage />} />
    </Routes>
  </HashRouter>
  )
}

export default App;