// import logo from '../../assets/images/logo.webp';

function Inicio() {
	return (
		<div id="inicio" className="text-white">
			<div className="flex flex-col justify-center w-full mx-auto max-w-35">
				<h1 className='font-extrabold text-center text-orange-600'>Rally Varadero</h1>
				<div className='my-3 flex'>
					<p className='w-full md:w-1/2 ml-10 font-sans'>
					Una vez más, nos preparamos para celebrar el 13º evento anual de Harley-Davidson. Este evento ha crecido año tras año, convirtiéndose en un hito importante en el calendario para los entusiastas de las motocicletas de todo el país y más allá
					Durante tres días, los asistentes podrán apreciar verdaderas oyas de colección de Harley-Davidson, exhibidas con orgullo por sus propietarios. Estas motos son más que simples vehículos; son una declaración de estilo de vida para aquellos que las poseen. Algunas de estas motos son modelos antiguos y otros son modernos, pero todas son cuidadosamente mantenidas y preparadas para largos viajes en la carretera.
					</p>
					{/* <img className='rounded-lg w-full h-auto md:w-1/2' src={} alt="" /> */}
				</div>
				<hr className="border-orange-600 m-0" />
			</div>
		</div>
	);
}

export default Inicio;
