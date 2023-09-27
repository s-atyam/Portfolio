import Contact from "./components/Contact/contact";
import Experties from "./components/Experties/experties";
import Linewithtext from "./components/HorizontalLineWithText/linewithtext";
import Introduction from "./components/Introduction/introduction";
import Navbar from "./components/Navbar/navbar";
import Problemsolving from "./components/ProblemSolving/problemsolving";
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
      <Linewithtext text="Problem Solving Skills"/>
      <Problemsolving/>
      <Linewithtext text="Contact Me"/>
      <Contact/>
      <Linewithtext text="Made in React"/>
    </div>
  );
}

export default App;
