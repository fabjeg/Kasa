import React from "react";
import "../styles/Banner.scss";

export function Banner({ image, description }) {
  return (
    <div className="container">
      <img
        className="mountain"
        src={image}
        alt="mountain"
      />
      {description?.length > 0 && (
        <h1 className="title">
          {description.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h1>
      )}
    </div>
  );
}
