import Experties from "./components/Experties/experties";
import Linewithtext from "./components/HorizontalLineWithText/linewithtext";
import Introduction from "./components/Introduction/introduction";
import Navbar from "./components/Navbar/navbar";
import Projects from "./components/Projects/projects";

function App() {
  return (
    <div id='main-app'>
      <Navbar/>
      <Introduction/>
      <Linewithtext text="My Experties"/>
      <Experties/>
      <Linewithtext text="Projects"/>
      <Projects/>
      <Linewithtext text="Projects"/>
    </div>
  );
}

export default App;
