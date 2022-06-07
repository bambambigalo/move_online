import React from "react";
import '../sliders/slider.css';
import Slider from "react-slick";

export default function SliderMove(props) {
const {slides} = props;
const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  };

//   const [open, setOpen] = useState(false)
    
//   function openSearch () {
      
     
//       setOpen(!open);
//   }
//   function closeSearch () {
//       setOpen(false)
//   }

    return (
        <div className="slider_box">
            
            <a className="title_slider">Фантастика
&#8250;</a>
            
            
        <Slider {...settings}>
            {
                slides.map(
                    slide => {
                        return <a  className="slide">

                            <img className="slideImg" key = {slide} src={slide.image} alt={''}></img> 
                            </a>

                    }
                )
            }
        </Slider>
        </div>
    )
}





















