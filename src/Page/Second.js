import React from "react";
import { useHistory } from "react-router-dom";
import "./Second.scss";

const Second = () => {
  const history = new useHistory();

  const handlesubmit = () => {
    history.push("/Propose");
  };
  const handlePage = () => {
    history.push("/Chocolate");
  };
  const handleT = () => {
    history.push("/Teddy");
  };
  const handlePR = () => {
    history.push("/Feb");
  };
  const handleH = () => {
    history.push("/Hug");
  };

  const handleK = () => {
    history.push("/Kiss");
  };
  const handleV = () => {
    history.push("/Valentine");
  };

  return (
    <div className="flex-container">
      <div className="container">
        <div className="halfup1 df">
          <div className="d-flex justify-content-center pt-2">
            <img src="https://res.cloudinary.com/dfoydebfr/image/upload/v1580298949/sayitwithsilk/assets/logo.png" />
          </div>
        </div>{" "}
        <br></br>
        <div className="img-section">
          <img
            src="https://res.cloudinary.com/dfoydebfr/image/upload/v1580298950/sayitwithsilk/assets/page-2/day1.png"
            onClick={handlesubmit}
          />
          <img
            src="https://res.cloudinary.com/dfoydebfr/image/upload/v1580298950/sayitwithsilk/assets/page-2/day2.png"
            onClick={handlePage}
          />
          <img
            src="https://res.cloudinary.com/dfoydebfr/image/upload/v1580298950/sayitwithsilk/assets/page-2/day3.png"
            onClick={handleT}
          />
          <img
            src="https://res.cloudinary.com/dfoydebfr/image/upload/v1580298950/sayitwithsilk/assets/page-2/day4.png"
            onClick={handlePR}
          />
          <img
            src="https://res.cloudinary.com/dfoydebfr/image/upload/v1580298950/sayitwithsilk/assets/page-2/day6.png"
            onClick={handleH}
          />
          <img
            src="https://res.cloudinary.com/dfoydebfr/image/upload/v1580298950/sayitwithsilk/assets/page-2/day5.png"
            onClick={handleK}
          />
          <img
            src="https://res.cloudinary.com/dfoydebfr/image/upload/v1580298950/sayitwithsilk/assets/page-2/day7.png"
            onClick={handleV}
          />
        </div>
      </div>
    </div>
  );
};

export default Second;
