import React, { useState, useEffect } from "react";

const Community = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    
    const randomImages = Array.from({ length: 6 }, (_, index) =>
      `https://picsum.photos/300/200?random=${index}`
    );
    setImages(randomImages);
  }, []);

  return (
    <div className="container mt-4 text-center">
      <h2 className="mb-4">Community Page</h2>
      <div className="row">
        {images.map((img, index) => (
          <div key={index} className="col-md-4 mb-3">
            <img
              src={img}
              alt={`Random ${index}`}
              className="img-fluid rounded shadow"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
