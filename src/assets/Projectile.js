import React,{Component} from 'react';

class Projectile extends Component{
    constructor(props){
        super(props);
        this.state= {

        }
    }

    render(){
        return  <img src='/projec.png' className='projectile' alt={this.props.projectile.id}
        style={{ transform: `rotate(${this.props.projectile.track * this.props.degPerTrack}deg) translate(${-this.props.projectile.position * this.props.maxDistance}px, 0px)` }} />
    }
}

export default Projectile;