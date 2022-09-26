import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import ProximoEvento from "./components/ProximoEvento";

function App() {
  return (
    <div>
      <Navbar />
      <hr className="m-0 mt-3 py-3" />
      <Inicio />
      <hr className="m-0 mt-3 py-3" />
      <ProximoEvento />
    </div>
  );
}

export default App;
