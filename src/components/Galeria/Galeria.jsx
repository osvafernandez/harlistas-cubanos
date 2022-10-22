import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import picture3 from '../../assets/images/picture-3.jpg';
import picture4 from '../../assets/images/picture-4.jpg';
import picture5 from '../../assets/images/picture-5.jpg';

function Galeria() {
	return (
		<div id="galeria" className="flex flex-col justify-center text-white">
			{/* <Slider /> */}
			<h2 className="text-center text-2xl py-5 text-orange-600 font-bold underline">Galería</h2>
			<Carousel
				className="flex flex-col items-center"
				autoFocus
				autoPlay
				showArrows
				infiniteLoop
				width="85%"
				swipeable
			>
				<div>
					<img src={picture3} alt="" />
				</div>
				<div>
					<img src={picture4} alt="" />
				</div>
				<div>
					<img src={picture5} alt="" />
				</div>
				<div>{/* <img src={p16} alt="" /> */}</div>
			</Carousel>
			<h2 className="font-bold m-auto">Coming Soon...</h2>
		</div>
	);
}

export default Galeria;
