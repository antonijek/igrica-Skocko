import React, {Component} from 'react'
import Kvadratic from './kvadratic'
import Lijevastrana from "./lijevastrana";


class Red extends Component {
    // tajna kombinacija
    render() {
        return <div>
          
        {this.props.niz.map((item,i)=> <Lijevastrana slika={item}
       
        key={i}/>)}
        </div>
    }
}
 
export default Red;