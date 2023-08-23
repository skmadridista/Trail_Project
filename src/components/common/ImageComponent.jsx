import React from "react";
import { Ratio } from "react-bootstrap";

function ImageComponent({ src, alt }) {
  return (
    <div>
      {window.innerWidth <= 768 ? (
        <Ratio aspectRatio="21x9">
          <img className="d-block mx-auto rounded" src={src} alt={alt} />
        </Ratio>
      ) : (
        <img
          className="d-block mx-auto rounded"
          src={src}
          alt={alt}
          width="800" 
          height="400" 
        />
      )}
    </div>
  );
}

export default ImageComponent;
