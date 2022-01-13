import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container2">
        <ul class="social-icons">
              <li><a href="https://www.facebook.com/pages/category/Artist/Diggaj-Music-100118888557119/">
                  <i className="fa fa-facebook"></i>
                </a></li>
                <li><a href="https://www.instagram.com/diggajmusic">
                  <i className="fa fa-instagram"></i>
                </a></li>
                <li> <a href="https://www.youtube.com/channel/UCWaukDGH7f7pWJmYAlHCDRg">
                  <i className="fa fa-youtube"></i>
                </a></li>
                <li> <a href="https://twitter.com/DiggajMusic">
                  <i className="fa fa-twitter"></i>
                </a></li>
                <li> <a href="https://open.spotify.com/artist/4akJPVB7Cs18SbVGafAS9e">
                  <i className="fa fa-spotify"></i>
                </a></li>
                <li> <a href="https://soundcloud.com/diggajmusic">
                  <i className="fa fa-soundcloud"></i>
                </a> </li>  
            </ul>
            <br/>
              <p className="copyright-text">
                Copyright &copy; 2021 All Rights Reserved by{'\u00A0'}
                <a href="#">Diggaj</a>.
              </p>
        </div>
        </footer>
    </>
  );
}
