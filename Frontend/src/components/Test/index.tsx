import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import './style.scss'
function Test(): JSX.Element {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <div className="card m-5">
        <div className="card-body d-flex">
          <div className="col-1 p-2 justify-content-center align-items-center d-flex">
            <div>
              <div className="crop mt-3">
                <div className="justify-content-center align-items-center d-flex mt-2">
                  <i className="bi bi-crop"></i>
                </div>
                <div className="justify-content-center align-items-center d-flex">Crop</div>
              </div>
              <div className="crop mt-3">
                <div className="justify-content-center align-items-center d-flex mt-2">
                  <i className="bi bi-crop"></i>
                </div>
                <div className="justify-content-center align-items-center d-flex">Crop</div>
              </div>
              <div className="crop mt-3">
                <div className="justify-content-center align-items-center d-flex mt-2">
                  <i className="bi bi-crop"></i>
                </div>
                <div className="justify-content-center align-items-center d-flex">Crop</div>
              </div>
              <div className="crop mt-3">
                <div className="justify-content-center align-items-center d-flex mt-2">
                  <i className="bi bi-crop"></i>
                </div>
                <div className="justify-content-center align-items-center d-flex">Crop</div>
              </div>
              <div className="crop mt-3">
                <div className="justify-content-center align-items-center d-flex mt-2">
                  <i className="bi bi-crop"></i>
                </div>
                <div className="justify-content-center align-items-center d-flex">Crop</div>
              </div>
            </div>
          </div>
          <div className="col-11">
            <div className="justify-content-center align-items-center d-flex">
              {selectedImage && <img src={selectedImage} alt="Uploaded Image" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
