import React from "react";
import { useHistory } from "react-router-dom";
import "./Third.scss";

const Third = () => {
  const history = new useHistory();

  const handlesubmit = () => {
    history.push("/Four");
  };

  const handleback = () => {
    history.push("/Second");
  };

  return (
    <div className=" flex-container">
      <div className="container">
        <div className="pt-2 ">
          <div className="topleft">
            <img
              src="https://res.cloudinary.com/dfoydebfr/image/upload/v1580298949/sayitwithsilk/assets/back.png"
              onClick={handleback}
            />{" "}
          </div>
        </div>{" "}
      </div>
      <div className="Propose">
        <img src="https://res.cloudinary.com/dfoydebfr/image/upload/v1580298949/sayitwithsilk/assets/logo.png" />
      </div>
      <div class="conCenter4 df">
        <div className="selectedP df">
          <p className="pTxt">SELECT POETRY</p>
          <div className="nextCon">
            <img
              src="https://res.cloudinary.com/dfoydebfr/image/upload/v1580298950/sayitwithsilk/assets/next.png"
              id="nextPoem"
              onClick={handlesubmit}
            />
          </div>

          <div className="div">
            <div class="pCon df">
              <div class="d-flex flex-column mb-3">
                <div className="pCon df">
                  {" "}
                  <div onclick="poem(this.id)" id="poem3">
                    <span class="p3text">
                      You're my best friend,
                      <br />
                      You're my partner in crime,
                      <br />
                      We've got a groovy kind of love,
                      <br />
                      That will stand the test of time.
                    </span>
                  </div>
                  <div onclick="poem(this.id)" id="poem2">
                    <span class="p2text">
                      When I wish upon a star
                      <br />I do not have to look too far
                      <br />
                      'cause sitting right next to me
                      <br />
                      shining bright and true
                      <br /> the loveliest star I ever knew.
                    </span>
                  </div>
                  <div onclick="poem(this.id)" id="poem3">
                    <span class="p3text">
                      You're sweet like chocolate
                      <br />
                      Intoxicating like wine,
                      <br />
                      I'm smitten by you,
                      <br />
                      Be my valentine?
                    </span>
                  </div>
                  <div onclick="poem(this.id)" id="poem4">
                    <span class="p4text">
                      Cashews and almonds are nuts,
                      <br />I am one too,
                      <br />
                      Because I go completely nutty,
                      <br />
                      Whenever I'm with you.
                    </span>
                  </div>
                  <div onclick="poem(this.id)" id="poem5">
                    <span class="p5text">
                      The day I saw you,
                      <br />I started believing in love at first sight,
                      <br />
                      Now I can't get my eyes off you,
                      <br />
                      You make my world more bright.
                    </span>
                  </div>
                  <div onclick="poem(this.id)" id="poem6">
                    <span class="p6text">
                      I haven't said it before,
                      <br />
                      but you know it's true
                      <br />
                      My heart melts like Silk,
                      <br />
                      When I'm with you.
                    </span>
                  </div>
                  <div onclick="poem(this.id)" id="poem7">
                    <span class="p6text">
                      Roses are red,
                      <br />
                      Silk is sweet,
                      <br />
                      Being with you,
                      <br />
                      makes me complete.
                    </span>
                  </div>
                  <div onclick="poem(this.id)" id="poem8">
                    <span class="p6text">
                      I will give you my heart,
                      <br />
                      You can keep it forever,
                      <br />
                      But when I give you a Silk,
                      <br />
                      Let's share it together.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
