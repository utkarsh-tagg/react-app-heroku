import React from "react";
import { useHistory } from "react-router-dom";
import "./From.scss";

const From = () => {
  const history = new useHistory();

  const handlesubmit = () => {
    history.push("/Second");
  };
  return (
    <div>
      <div className="flex-container">
        <div className="container">
          <div className="halfup1 df">
            <div className="d-flex justify-content-center pt-2">
              <img src="https://res.cloudinary.com/dfoydebfr/image/upload/v1580298949/sayitwithsilk/assets/logo.png" />
            </div>{" "}
            <br></br>
            <div className="reg df ">
              <label for="name">Full Name</label> <br />
              <input type="text" id="name" /> <br></br>
              <label for="email">Email Id</label> <br />
              <input type="text" id="email" /> <br></br>
              <label for="phone">Number</label> <br />
              <input type="number" pattern="[0-9]{1}[0-9]{9}" id="phone" />
            </div>{" "}
            <br></br>
            <div className="sub">
              <img
                src="https://res.cloudinary.com/dfoydebfr/image/upload/v1580298950/sayitwithsilk/assets/submit.png"
                onClick={handlesubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default From;
