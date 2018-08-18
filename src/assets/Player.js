import React,{Component} from 'react';

class Player extends Component{
    constructor(props){
        super(props);
        this.state= {

        }
    }

    render(){
        return <img src='/narto.png' className='player' alt='player'
        style={{ transform: `rotate(${this.props.playerTrack * this.props.degPerTrack}deg)` }}/>
    }
}

export default Player;