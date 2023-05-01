import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel className="mt-5 mb-5">
      <Carousel.Item>
        <img
          className="d-block w-75 m-auto"
          src="../src/assets/carouselUno.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 m-auto"
          src="../src/assets/carouselDos.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 m-auto"
          src="../src/assets/carouselTres.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 m-auto"
          src="../src/assets/carouselCuatro.jpg"
          alt="Forth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;