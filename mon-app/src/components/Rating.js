import "../styles/Rating.scss";

export function Rating({ rating }) {
  const renderStars = (rating) => {
    const totalStars = 5;
    return (
      <div className="stars-container">
        {[...Array(totalStars)].map((_, index) => {
          if (index < rating) {
            return (
              <i
                key={index}
                className="fa-solid fa-star filled-star"
              ></i>
            );
          }
          return (
            <i
              key={index}
              className="fa-solid fa-star empty-star"
            ></i>
          );
        })}
      </div>
    );
  };

  return <div>{renderStars(rating)}</div>;
}
