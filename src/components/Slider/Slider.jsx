import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useState } from 'react';
import picture3 from '../../assets/images/picture-3.jpg';
import picture4 from '../../assets/images/picture-4.jpg';
import picture5 from '../../assets/images/picture-5.jpg';

function Slider() {
	const images = [picture3, picture4, picture5];
	const [activeSlide, setActiveSlide] = useState(1);

	const prevSliderHandler = (index) => {
		if (index === 0) {
			setActiveSlide(images.length - 1);
		} else if (index > 1) {
			setActiveSlide(activeSlide - 1);
		} else {
			setActiveSlide(images.length - 1);
		}
	};

	const nextSliderHandler = (index) => {
		if (index === images.length - 1) {
			setActiveSlide(1);
		} else if (index < images.length - 1) {
			setActiveSlide(activeSlide + 1);
		} else {
			setActiveSlide(images.length - 1);
		}
	};

	return (
		<div className="m-6">
			{images.map((item, index) => (
				<div
					key={item.toString()}
					className={activeSlide === index ? 'flex justify-between items-center' : 'hidden'}
				>
					<button
						type="button"
						className="text-6xl border-2 border-black"
						onClick={() => prevSliderHandler(index)}
					>
						<FiChevronLeft />
					</button>
					<div className=" w-full h-[400px]">
						<img src={item} alt="" className=" object-cover w-full h-[400px] px-6" />
					</div>
					<button
						type="button"
						className="text-6xl border-2 border-black"
						onClick={() => nextSliderHandler(index)}
					>
						<FiChevronRight />
					</button>
				</div>
			))}
		</div>
	);
}

export default Slider;
