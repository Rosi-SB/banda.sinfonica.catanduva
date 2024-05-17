import React from "react";
import Slider from "react-slick";
import style from "./Carousel.module.css"

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className={style.carousel}>
      <Slider {...settings}>
        <div>
          <img src="/images/Photos/capa.jpg" alt="Fotos da Banda" />
        </div>
        <div>
          <img src="/images/Photos/IMG-2021-15.jpg" alt="Fotos da Banda" />
        </div>
        <div>
          <img src="/images/Photos/16.jpg" alt="Fotos da Banda" />
        </div>
        <div>
          <img src="/images/Photos/IMG-2021-06.jpg" alt="Fotos da Banda" />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
