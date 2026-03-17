import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";


import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const ImageStyle=styled.img`
        width:20vw;
        height: 35vh;
        border-radius: 15%;
        margin-left: auto;
        margin-right:auto;
        
        `;

const CarouselContainer = styled.div`
  padding: 20px 0;
  background-color: #f5f5f5;
  border-radius: 10px;
  display: flex;
  justify-content: center;
`;
let images=[image1,image2,image3,image4,image5]
const HomeCarrousel = () => (
  
  <Carousel responsive={responsive} infinite={true}
  showDots={true}
  centerMode={true}
  >
    {images.map((image,index)=>(
        <ImageStyle key={index} src={image} />

    )
    )}
  </Carousel>
);

export default HomeCarrousel;