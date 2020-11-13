import React from "react";
import Carousel from "react-multi-carousel";
import ProductItem from "../product-item/product-item.component";

import "react-multi-carousel/lib/styles.css";
import "./carousel-container.styles.scss";

const CarouselContainer = ({ products }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
      breakpoint: { max: 850, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="carousel-container">
      <Carousel
        responsive={responsive}
        autoPlay
        infinite
        autoPlaySpeed={2000}
      >
        {products.map((el, i) => (
          <ProductItem item={el}  key={i} class_type="product-item product-item-carousel" />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
