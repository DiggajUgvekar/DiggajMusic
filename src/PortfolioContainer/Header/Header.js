import React from "react";
import "./Header.css"
import {Link} from "react-router-dom";
export default function Header() {
  var num = 0;
  return (
    <div>
      <br />
      <br />
      <br />
      <nav>
        <div className="container">
        <Link className="nav-link" to="/">
          <h1 className="navtitle">DIGGAJ</h1>
          </Link>
          <div className="menu" id="menu">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/music">Music</Link> 
          <Link className="nav-link" to="/gallery">Gallery</Link> 
          <Link className="nav-link" to="/contact">Contact</Link> 
          </div>

          <button
            className="hamburger"
            id="hamburger"
            onClick={function togglebutton(){
              var menuList = document.getElementById("menu");
              
              menuList.style.maxHeight = num;
              var element = document.getElementById("hamburger");
               element.classList.toggle("is-active");

              
              if(num == 0){
               
                menuList.style.maxHeight = "550px";
                menuList.style.display = "block";
                num= num+550;
              }
              else{
                menuList.style.display = "none";
                menuList.style.maxHeight="0px";
                num= num-550;
               
              }
              
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </div>
  );
}
