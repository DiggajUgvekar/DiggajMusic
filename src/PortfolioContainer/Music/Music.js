import React from "react";
import "./Music.css";
import sg from "../../asset/Music/sgremix.jpg";
import sweetspot from "../../asset/Music/sweet spot.png";
import business from "../../asset/Music/businessremix.png";
import psycho from "../../asset/Music/psycho remix.jpeg";
import socha from "../../asset/Music/socha na tha remix.jpg";
import infinite from "../../asset/Music/infinite.jpg";
export default function Music() {
  return (
      <>
    <div className= "music-container">
      <div className="image-container">
        <a href="https://www.youtube.com/watch?v=BMY-kYRFBSI" target="_blank">
          <div  className="box-container b1">
            <figure>
              <img className="music-image"src={sg} width="300px" height="300px" />
              <div className="text-information">
                <hr />
                <figcaption>
                  <strong>SG (Diggaj Remix)</strong>
                </figcaption>
                <figcaption>
                  <small>DJ Snake, Ozuna, Megan, Lisa, Diggaj</small>
                </figcaption>
              </div>
              <br />
            </figure>
          </div>
        </a>
      </div>

      <div className="image-container">
        <a href="https://diggajmusic.fanlink.to/sweetspot" target="_blank">
          <div className="box-container b2">
            <figure>
              <img className="music-image" src={sweetspot} width="300px" height="300px" />
              <div className="text-information">
                <hr />
                <figcaption>
                  <strong>Sweet Spot</strong>
                </figcaption>
                <figcaption>
                  <small>Diggaj</small>
                </figcaption>
              </div>
              <br /><br />
            </figure>
          </div>
        </a>
      </div>

      <div className="image-container">
        <a href="https://www.youtube.com/watch?v=IYid7d3v1oM" target="_blank">
          <div className="box-container b3">
            <figure>
              <img className="music-image" src={business} width="300px" height="300px" />
              <div className="text-information">
                <hr />
                <figcaption>
                  <strong>The Business (Diggaj Remix)</strong>
                </figcaption>
                <figcaption>
                  <small>Tiësto, Diggaj</small>
                </figcaption>
              </div>
              <br />
            </figure>
          </div>
        </a>
      </div>
    </div>

    <div className= "music-container">
      <div className="image-container">
        <a href="https://www.youtube.com/watch?v=QPcbdlmePPQ" target="_blank">
          <div className="box-container b4">
            <figure>
              <img className="music-image"src={psycho} width="300px" height="300px" />
              <div className="text-information">
                <hr />
                <figcaption>
                  <strong>Psycho (Diggaj Remix)</strong>
                </figcaption>
                <figcaption>
                  <small>Vanda, Joel Woods, AV Solo, Diggaj</small>
                </figcaption>
              </div>
              <br />
            </figure>
          </div>
        </a>
      </div>

      <div className="image-container">
        <a href="https://www.youtube.com/watch?v=G9tQ6Y4Q66E" target="_blank">
          <div className="box-container b5">
            <figure>
              <img className="music-image" src={socha} width="300px" height="300px" />
              <div className="text-information">
                <hr />
                <figcaption>
                  <strong>Socha Na Tha ( Diggaj Remix )</strong>
                </figcaption>
                <figcaption>
                  <small>Zaeden, Diggaj</small>
                </figcaption>
              </div>
              <br />
            </figure>
          </div>
        </a>
      </div>

      <div className="image-container">
        <a href="https://diggajmusic.fanlink.to/infinite" target="_blank">
          <div className="box-container b6">
            <figure>
              <img className="music-image" src={infinite} width="300px" height="300px" />
              <div className="text-information">
                <hr />
                <figcaption>
                  <strong>Infinite</strong>
                </figcaption>
                <figcaption>
                  <small>Diggaj</small>
                </figcaption>
              </div>
              <br /><br />
            </figure>
          </div>
        </a>
      </div>
    </div>
    </>
  );
}
