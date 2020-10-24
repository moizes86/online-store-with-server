import React from "react";
import "./homepage.styles.scss";

import CarouselContainer from "../../components/carousel-container/carousel-container.component";

export default function Homepage({ products }) {
  return (
    <div className="homepage">
      <CarouselContainer products={products} />
    </div>
  );
}
