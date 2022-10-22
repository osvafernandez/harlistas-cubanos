import { Navbar, Inicio, Contactos, Galeria, ProximoEvento } from './components';

function App() {
	return (
		<>
			<Navbar />
			<hr className=" border-orange-600 m-0 mt-3 py-1" />
			<Inicio />
			<hr className="border-3 border-orange-600 m-0 mt-3 py-3" />
			<ProximoEvento />
			<hr className="border-3 border-orange-600 m-0 mt-3 py-3" />
			<Galeria />
			<hr className="border-3 border-orange-600 m-0 mt-3 py-3" />
			<Contactos />
		</>
	);
}

export default App;
