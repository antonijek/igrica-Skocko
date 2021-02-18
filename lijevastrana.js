import React, { Component } from "react";
import "./lijevastrana.css";

class Lijevastrana extends Component {
  render() {
    
    return (
      <div className="krugovi">
    
<div style={{backgroundColor: this.props.slika, padding:'30px',borderRadius:'50%'}}></div>
      
      </div>
    );
  }
}

export default Lijevastrana;
