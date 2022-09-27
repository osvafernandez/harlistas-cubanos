import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import ProximoEvento from "./components/ProximoEvento";
import Galeria from "./components/Galeria";
import Contactos from "./components/Contactos";

function App() {
  return (
    <div>
      <Navbar />
      <hr className=" border-orange-600 m-0 mt-3 py-1" />
      <Inicio />
      <hr className="border-3 border-orange-600 m-0 mt-3 py-3" />
      <ProximoEvento />
      <hr className="border-3 border-orange-600 m-0 mt-3 py-3" />
      <Galeria />
      <hr className="border-3 border-orange-600 m-0 mt-3 py-3" />
      <Contactos />
    </div>
  );
}

export default App;
