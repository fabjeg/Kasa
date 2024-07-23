import "../styles/Carousel.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListData from "../datas/liste.json";

export function Carousel() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filteredPictures, setFilteredPictures] = useState([]);

  useEffect(() => {
    const item = ListData.find((item) => item.id === id);
    if (item && item.pictures) {
      setFilteredPictures(item.pictures);
    }
  }, [id]);

  const totalImages = filteredPictures.length;

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + totalImages) % totalImages
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-image"
        style={{
          backgroundImage: `url(${filteredPictures[currentImageIndex]})`,
        }}
      >
        {totalImages > 1 && (
          <div
            className="fa-solid fa-chevron-left"
            onClick={prevImage}
          ></div>
        )}
        <p className="image-count">
          {currentImageIndex + 1} / {totalImages}
        </p>
        {totalImages > 1 && (
          <div
            className="fa-solid fa-chevron-right"
            onClick={nextImage}
          ></div>
        )}
      </div>
    </div>
  );
}
