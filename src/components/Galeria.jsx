import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import p17 from './imgs/p17.jpg';
import p19 from './imgs/p19.jpg';
import p20 from './imgs/p20.jpg';
// import p16 from "./imgs/p16.jpg";

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
					<img src={p17} alt="" />
				</div>
				<div>
					<img src={p19} alt="" />
				</div>
				<div>
					<img src={p20} alt="" />
				</div>
				<div>{/* <img src={p16} alt="" /> */}</div>
			</Carousel>
			<h2 className="font-bold m-auto">Coming Soon...</h2>
		</div>
	);
}

export default Galeria;
