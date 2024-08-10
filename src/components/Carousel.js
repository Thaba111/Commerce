// // src/components/Carousel.js
// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './Carousel.css'; // Custom CSS file for additional styles

// const Carousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2, // Show two images at a time
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: true,
//   };

//   return (
//     <div className="carousel-wrapper">
//       <div className="carousel-container">
//         <Slider {...settings}>
//           <div>
//             <img
//               src="/images/carousel1.jpg"
//               alt="Carousel Image 1"
//               className="carousel-image"
//             />
//           </div>
//           <div>
//             <img
//               src="/images/carousel2.jpg"
//               alt="Carousel Image 2"
//               className="carousel-image"
//             />
//           </div>
//           <div>
//             <img
//               src="/images/carousel3.jpg"
//               alt="Carousel Image 3"
//               className="carousel-image"
//             />
//           </div>
//           <div>
//             <img
//               src="/images/carousel4.jpg"
//               alt="Carousel Image 4"
//               className="carousel-image"
//             />
//           </div>
//           <div>
//             <img
//               src="/images/carousel5.jpg"
//               alt="Carousel Image 5"
//               className="carousel-image"
//             />
//           </div>
//           <div>
//             <img
//               src="/images/heroimage.jpg"
//               alt="Hero Image 1"
//               className="carousel-image"
//             />
//           </div>
//           <div>
//             <img
//               src="/images/heroimage2.jpg"
//               alt="Hero Image 2"
//               className="carousel-image"
//             />
//           </div>
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Carousel;


// src/components/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'; // Custom CSS file for additional styles

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show two images at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <Slider {...settings}>
          <div>
            <img
              src="/images/carousel1.jpg"
              alt="Colorful sandals"
              className="carousel-image"
            />
          </div>
          <div>
            <img
              src="/images/carousel2.jpg"
              alt="Stylish flip-flops"
              className="carousel-image"
            />
          </div>
          <div>
            <img
              src="/images/carousel3.jpg"
              alt="Elegant footwear"
              className="carousel-image"
            />
          </div>
          <div>
            <img
              src="/images/carousel4.jpg"
              alt="Beach sandals"
              className="carousel-image"
            />
          </div>
          <div>
            <img
              src="/images/carousel5.jpg"
              alt="Casual flip-flops"
              className="carousel-image"
            />
          </div>
          <div>
            <img
              src="/images/heroimage.jpg"
              alt="Summer collection"
              className="carousel-image"
            />
          </div>
          <div>
            <img
              src="/images/heroimage2.jpg"
              alt="Comfort sandals"
              className="carousel-image"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
