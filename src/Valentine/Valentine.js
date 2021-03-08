import React from "react";
import { useHistory } from "react-router-dom";
import "./Valentine.scss";

const Valentine = () => {
  const history = new useHistory();

  const handlesubmit = () => {
    history.push("/Third");
  };

  const handleback = () => {
    history.push("/Second");
  };

  return (
    <div>
      <div className="topleft">
        <img
          src="https://res.cloudinary.com/dfoydebfr/image/upload/v1580298949/sayitwithsilk/assets/back.png"
          onClick={handleback}
        />{" "}
      </div>

      <div className="Propose">
        <img src="https://res.cloudinary.com/dfoydebfr/image/upload/v1580298949/sayitwithsilk/assets/logo.png" />
      </div>

      <div className="text">
        <p>Valentine Day</p>
      </div>

      <div className="Gallery">
        <img src="https://res.cloudinary.com/dfoydebfr/image/upload/v1580298951/sayitwithsilk/assets/page-3/day7.png" />
      </div>
      <div className="sub">
        <img
          src="https://res.cloudinary.com/dfoydebfr/image/upload/v1580298950/sayitwithsilk/assets/next.png"
          onClick={handlesubmit}
        />
      </div>
    </div>
  );
};

export default Valentine;
