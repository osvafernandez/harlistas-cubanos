// import logo from '../../assets/images/logo.webp';
import AiPhoto from '../../assets/IA Generated photos/fotor-ai-20230810115147.jpg'

function Inicio() {
	return (
		<div id="inicio" className="text-white">
			<div className="flex flex-col justify-center w-full mx-auto max-w-35">
				<div className='my-3 flex'>
					<p className='w-full md:w-1/2 ml-10'>
					Una vez más, nos preparamos para celebrar el 13º evento anual de Harley-Davidson. Este evento ha crecido año tras año, convirtiéndose en un hito importante en el calendario para los entusiastas de las motocicletas de todo el país y más allá
					</p>
					<img className='rounded-lg w-full md:w-1/2 h-auto' src={AiPhoto} alt="" />
				</div>
				<hr className="border-orange-600 m-0" />
			</div>
		</div>
	);
}

export default Inicio;
