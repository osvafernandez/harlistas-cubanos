import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useState } from "react";
import p17 from "./imgs/p17.jpg";
import p19 from "./imgs/p19.jpg";
import p20 from "./imgs/p20.jpg";
import p16 from "./imgs/p16.jpg";

const Slider = () => {
  const images = [p16, p17, p19, p20];
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
      {images.map((item, index) => {
        return (
          <div
            key={index}
            className={
              activeSlide === index
                ? "flex justify-between items-center"
                : "hidden"
            }
          >
            <button
              className="text-6xl border-2 border-black"
              onClick={() => prevSliderHandler(index)}
            >
              <FiChevronLeft />
            </button>
            <div className=" w-full h-[400px]">
              <img
                src={item}
                alt=""
                className=" object-cover w-full h-[400px] px-6"
              />
            </div>
            <button
              className="text-6xl border-2 border-black"
              onClick={() => nextSliderHandler(index)}
            >
              <FiChevronRight />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
