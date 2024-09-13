"use client";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

function CarouselComponent() {
  return (
    <Carousel className="bg-dark">
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Image
          src="https://via.placeholder.com/800x400"
          alt="First slide"
          width={800}
          height={400}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Image
          src="https://via.placeholder.com/800x400"
          alt="First slide"
          width={800}
          height={400}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Image
          src="https://via.placeholder.com/800x400"
          alt="First slide"
          width={800}
          height={400}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
