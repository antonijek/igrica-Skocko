import React, { Component } from "react";
import "./desnastrana.css";
import Kvadratic from "./kvadratic";

class Desnastrana extends Component {
  
 
  render() {
    return (
      <div className='znakovi'>
        {this.props.nizZnakova.map((item) => (
          <div key={item}
          
          className="kvadrat">
            <img 
            
            onClick={()=>this.props.klikNaZnak(item)}
            src={item} width="60px"></img>
          </div>
        ))}
      </div>
    );
  }
}

export default Desnastrana;
