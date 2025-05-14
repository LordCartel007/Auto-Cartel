import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  width: 100%;
  height: 200px;
  padding: 10px;
  background-color: #000000;
  @media screen and (max-width: 767px) {
    height: 140px;
  }
`;

const CarouselWrapper = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  will-change: transform;
`;

const Image = styled.img`
  height: 180px;
  width: 150px; /* Ensure all images have the same width */
  object-fit: cover; /* Prevent stretching */
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 767px) {
    height: 120px;
    width: 100px;
  }
`;

const FullScreenOverlay = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const FullScreenImage = styled.img`
  max-width: 98%;
  max-height: 98%;
  border-radius: 10px;
`;

export default function HorizontalCarousel() {
  const [scrollAmount, setScrollAmount] = useState(0);
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const wrapperRef = useRef(null);

  const images = [
    "https://cartel-next-ecommerce.s3.amazonaws.com/1740696701581.jfif",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747217771622.jpeg ",
    " https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747217561113.jpeg",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747217537130.jpeg ",
    " https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747217495208.jpeg",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747214462615.jpeg ",
    " https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747214452038.jpeg",
    " https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747214099529.jfif",
    " https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747213596562.jpeg",
    " https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747213581146.jpeg",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747213570798.jpeg ",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747213561097.jpeg ",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747213497565.jpeg ",
    " https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747213485025.jpeg",
    " https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747213461261.jpeg",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747213452833.jpeg ",
    " https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747213370665.jpeg",
    " https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747217505128.jpeg",
    " https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747213353350.jpeg",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747213191588.jpeg ",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747213181658.jpeg ",
    " https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747212790955.jpeg",
    " https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747212782807.jpeg",
    " https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747212774306.jpeg",
    " https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747212765171.jpeg",
    " https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747212755658.jpeg",
    " https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747212749291.jpeg",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747212738231.jpeg ",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747211950611.jpg ",
    " https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747211941267.jpg",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747211930903.jpg ",
    " https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747211743624.jpg",
    " https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747211715840.jpg",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747211706250.jpg ",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747211693376.jpg ",
    " https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747211685021.jpg",
  ];
  useEffect(() => {
    const scrollSpeed = 1; // Adjust speed
    const interval = setInterval(() => {
      setScrollAmount((prev) => {
        if (!wrapperRef.current) return prev;
        return prev >= wrapperRef.current.scrollWidth ? 0 : prev + scrollSpeed;
      });
    }, 18); // Adjust scrolling interval

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <CarouselContainer>
        <CarouselWrapper
          ref={wrapperRef}
          style={{ transform: `translateX(-${scrollAmount}px)` }}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              onClick={() => setFullScreenImage(image)}
            />
          ))}
        </CarouselWrapper>
      </CarouselContainer>

      {/* Full Screen Image Viewer */}
      <FullScreenOverlay
        show={fullScreenImage}
        onClick={() => setFullScreenImage(null)}
      >
        {fullScreenImage && <FullScreenImage src={fullScreenImage} />}
      </FullScreenOverlay>
    </>
  );
}
