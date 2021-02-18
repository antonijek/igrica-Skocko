import React, { Component } from "react";
import "./kvadratic.css";

class Kvadratic extends Component {
  render() {
      
    return (
      <div className="vodoravno">
      <img src={this.props.slika} width='60px'></img>
      
      </div>
    );
  }
}

export default Kvadratic;
