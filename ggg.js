import React, {Component} from 'react'
import Kvadratic from './kvadratic'



class Red1 extends Component {
    // tajna kombinacija
    render() {
        return <div className='jedan'>
        {this.props.niz.map((item,i)=> <Kvadratic slika={item}
        
        key={i}/>)}
        </div>
    }
}
 
export default Red1;
