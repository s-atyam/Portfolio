import Linewithtext from "./components/HorizontalLineWithText/linewithtext";
import Introduction from "./components/Introduction/introduction";
import Navbar from "./components/Navbar/navbar";

function App() {
  return (
    <div id='main-app'>
      <Navbar/>
      <Introduction/>
      <Linewithtext text="My Experties"/>
    </div>
  );
}

export default App;
