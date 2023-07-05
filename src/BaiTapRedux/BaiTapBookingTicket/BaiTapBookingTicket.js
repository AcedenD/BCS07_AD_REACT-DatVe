import React, { Component } from "react";
import "./BaiTapBookingTicket.css";
import ThongTinhDatGhe from "./Components/ThongTinhDatGhe";
import danhSachGheData from "./danhSachGhe.json";
import HangGhe from "./Components/HangGhe";

export default class BaiTapBookingTicket extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return (
        <div key={index} className="ms-3 mt-3">
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };

  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./img/bookingTicket/bgmovie.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-8">
                <h1 className="text-warning  text-center">
                  Booking Movie Homework
                </h1>
                <div
                  className="mt-3 text-light  text-center"
                  style={{ fontSize: "25px" }}
                >
                  Screen
                </div>
                <div className="d-flex justify-content-center flex-row mt-2">
                  <div className="screen "></div>
                </div>
                {this.renderHangGhe()}
              </div>
              <div className="col-4">
                <h1 className="text-light fs-1 mt-2 text-center">
                  Selected seats list
                </h1>
                <ThongTinhDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
