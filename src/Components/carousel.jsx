import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel className="mt-5 mb-5">
      <Carousel.Item>
        <img
          className="d-block w-75 m-auto"
          src="https://firebasestorage.googleapis.com/v0/b/a-cara-de-perro-5251e.appspot.com/o/carouselUno.jpg?alt=media&token=8f1a358c-b815-4cd2-a0f0-46c019ebc0a8"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 m-auto"
          src="https://firebasestorage.googleapis.com/v0/b/a-cara-de-perro-5251e.appspot.com/o/carouselDos.jpg?alt=media&token=ada80303-363c-4d2a-8fa6-21ea325b43b3"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 m-auto"
          src="https://firebasestorage.googleapis.com/v0/b/a-cara-de-perro-5251e.appspot.com/o/carouselTres.jpg?alt=media&token=3e544fcd-d2d2-4057-b0cb-bc5e55773cab"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 m-auto"
          src="https://firebasestorage.googleapis.com/v0/b/a-cara-de-perro-5251e.appspot.com/o/carouselCuatro.jpg?alt=media&token=97f987d4-856e-4920-9f24-c616231b8372"
          alt="Forth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
