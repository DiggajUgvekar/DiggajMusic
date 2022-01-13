import React from "react";
import "./Profile.css";
import {Link} from "react-router-dom";
//import Typical from "react-typical";
export default function Profile() {
  return (
    <>
    
      
      <div className="profile-container">
        <div className="profile-parents">
          <div className="profile-details">
            <div className="colz">
              <div className="colz-icon">
                <a href="https://www.facebook.com/pages/category/Artist/Diggaj-Music-100118888557119/">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/diggajmusic">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCWaukDGH7f7pWJmYAlHCDRg">
                  <i className="fa fa-youtube"></i>
                </a>
                <a href="https://twitter.com/DiggajMusic">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="https://open.spotify.com/artist/4akJPVB7Cs18SbVGafAS9e">
                  <i className="fa fa-spotify"></i>
                </a>
                <a href="https://soundcloud.com/diggajmusic">
                  <i className="fa fa-soundcloud"></i>
                </a>
              </div>
            </div>

            <div className="profile-details-name">
              <span className="primary-text">
                {" "}
                Hello, I'M <span className="highlighted-text">Diggaj</span>
              </span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                {" "}
               {/* { <h1>
                  {" "}
                  {/*<Typical
                    loop={Infinity}
                    steps={[
                      "Indian DJ",
                      1000,
                      "Music Producer",
                      1000,
                      "Songwriter",
                      1000,
                      "Musician",
                      1000,
                    ]}
                  />
                </h1>*/}
                <span className="profile-role-tagline">
                  Sharing Joy through Music
                </span>
              </span>
            </div>
            <div className="profile-options">
            <Link className="nav-link" to="/music"> 
              <button className="btn primary-btn">
                Get Music
              </button>
              </Link>
              
              <Link className="nav-link" to="/contact">
                <button className="btn highlighted-btn">Contact Now</button>
                </Link> 
            
            </div>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
        
      </div>
      
    </>
  );
}
