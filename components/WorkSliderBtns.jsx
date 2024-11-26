"use client";

import { useSwiper } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button
        className={btnStyles}
        onClick={() => swiper.slidePrev()}
      >
        <FaChevronLeft className={iconsStyles} />
      </button>
      <button
        className={btnStyles}
        onClick={() => swiper.slideNext()}
      >
        <FaChevronRight className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
