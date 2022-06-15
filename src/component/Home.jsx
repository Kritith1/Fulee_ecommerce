import React from "react";
import Products from "./Products";



export default function Home() {
  return (
    <div classNameName="hero">
      <div className="card bg-dark text-white border-0">
        <img src="/assets/bg1.jpg" className="card-img" alt="Background" height="650px"/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div classNameName="container">
            <h5 className="card-title display-3 fw-bolder mb-0 text-dark ">NEW SEASON ARRIVALS</h5>
          <p className="card-text lead fs-2 text-dark ">
            CHECK OUT ALL THE TRENDS
          </p>
            </div>
         
        </div>
      </div>
      <Products />
    </div>
  );
}
