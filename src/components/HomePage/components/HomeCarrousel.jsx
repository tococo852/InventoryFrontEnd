import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";

import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },

  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },

  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },

  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselSection = styled.section`
  width: 100%;
  min-height: 55vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 4rem 0;

  background: linear-gradient(
    to bottom,
    var(--gray-1),
    var(--gray-2)
  );
`;

const CarouselContainer = styled.div`
  width: 95%;
  max-width: 1400px;

  padding: 2rem 0;
`;

const ImageStyle = styled.img`
  width: 100%;
  max-width: 320px;

  height: 380px;

  object-fit: cover;

  border-radius: 24px;

  margin-left: auto;
  margin-right: auto;

  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);

  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

let images = [
  image1,
  image2,
  image3,
  image4,
  image5,
];

const HomeCarrousel = () => (
  <CarouselSection>
    <CarouselContainer>
      <Carousel
        responsive={responsive}
        infinite={true}
        showDots={true}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={4000}
      >
        {images.map((image, index) => (
          <ImageStyle
            key={index}
            src={image}
            alt={`carousel-image-${index}`}
          />
        ))}
      </Carousel>
    </CarouselContainer>
  </CarouselSection>
);

export default HomeCarrousel;