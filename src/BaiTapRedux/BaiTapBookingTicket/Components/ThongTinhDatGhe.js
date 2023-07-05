import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTinhDatGhe extends Component {
  render() {
    console.log(this.props.seatList);
    return (
      <div className="mt-5">
        <button className="gheDuocChon"></button>
        {"  "}
        <span className="text-light fs-2">Unavalible seat</span>
        <br />
        <button className="gheDangChon"></button>
        {"  "}
        <span className="text-light fs-2">Selected seat</span>
        <br />
        <button className="ghe ms-0"></button>
        {"  "}
        <span className="text-light fs-2">Avalible seat</span>
        <br />
        <div>
          <div className="table-responsive">
            <table className="table table-secondary opacity-75 mt-4" border="2">
              <thead>
                <tr>
                  <th scope="col">Seat number</th>
                  <th scope="col">Price</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody>
                {this.props.seatList.map((ghe, index) => {
                  return (
                    <tr key={index}>
                      <td scope="col">{ghe.soGhe}</td>
                      <td scope="col">{ghe.gia.toLocaleString()}</td>
                      <td scope="col">
                        <i
                          style={{ cursor: "pointer" }}
                          className="fa fa-multiply fw-bolder fs-3 text-danger"
                          onClick={() => {
                            this.props.removeGhe(ghe);
                          }}
                        ></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="fw-bolder">
                  <td scope="col">Total</td>
                  <td scope="col">
                    {this.props.seatList
                      .reduce((tongTien, ghe, index) => {
                        // console.log(ghe.gia);
                        return (tongTien += ghe.gia);
                      }, 0)
                      .toLocaleString()}
                  </td>
                  <td scope="col"></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    seatList: state.danhSachGhe.danhSachGheDangDat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeGhe: (ghe) => {
      const action = {
        type: "REMOVE_GHE",
        payload: ghe,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinhDatGhe);
