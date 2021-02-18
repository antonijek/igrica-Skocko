import React, {Component} from 'react'
import Kvadratic from './kvadratic'
import Poslednji from './poslednji'


class PoslednjiRed extends Component {
    
    render() {
        return <div className='jedan'>
        {this.props.niz.map((item,i)=> <Poslednji slika ={item}
        
        key={i}/>)}
        </div>
    }
}
 
export default PoslednjiRed;
