import React from "react";
import { useHistory } from "react-router-dom";
import "./Four.scss";

const Four = () => {
  const history = new useHistory();

  const handlesubmit = () => {
    history.push("/Five");
  };

  const handleback = () => {
    history.push("/Third");
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

      <div className="conCenter5 df">
        <div className="pads5 df">
          <p className="sharetext">
            Share Greeting Card
            <br />
            With?
          </p>
          <div className="getName">
            <input type="text" id="canvasName" placeholder="Enter Name" />
          </div>
          <div className="Next">
            <img
              src="https://res.cloudinary.com/dfoydebfr/image/upload/v1580298950/sayitwithsilk/assets/next.png"
              onClick={handlesubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Four;
