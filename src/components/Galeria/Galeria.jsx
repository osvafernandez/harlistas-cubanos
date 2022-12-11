import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import picture3 from '../../assets/images/picture-3.jpg';
import motos11 from '../../assets/images/motos11.jpg';
import picture5 from '../../assets/images/picture-5.jpg';
import motos15 from '../../assets/images/motos15.jpg';
import motos09 from '../../assets/images/motos09.jpg';

function Galeria() {
	return (
		<div id="galeria" className="flex flex-col justify-center text-white">
			{/* <Slider /> */}
			<h2 className="text-center text-2xl py-5 text-orange-600 font-bold underline">Galería</h2>
			<Carousel
				className="flex flex-col items-center"
				autoFocus
				autoPlay
				interval={5000}
				showArrows
				infiniteLoop
				width="85%"
				swipeable
			>
				<div>
					<img src={picture3} alt="" />
				</div>
				<div>
					<img src={motos11} alt="" />
				</div>
				<div>
					<img src={picture5} alt="" />
				</div>
				<div>
					<img src="https://www.excelenciasdelmotor.com/sites/default/files/2019-02/portada_24.jpg" alt="" />
				</div>
				<div>
					<img src={motos15} alt="" />
				</div>
				<div>
					<img src={motos09} alt="" />
				</div>
			</Carousel>
			<h2 className="font-bold m-auto">Coming Soon...</h2>
		</div>
	);
}

export default Galeria;
