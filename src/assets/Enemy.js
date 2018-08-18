import React,{Component} from 'react';

class Enemy extends Component{
    constructor(props){
        super(props);
        this.state= {

        }
    }

    render(){
        return  <img src='/dino.png' className='enemy' alt={this.props.enemy.id}
        style={{ transform: `rotate(${this.props.enemy.track * this.props.degPerTrack}deg) translate(${-this.props.enemy.position * this.props.maxDistance}px, 0px)` }} />
    }
}

export default Enemy;