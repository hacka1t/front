import React,{Component} from 'react';

class Scoreboard extends Component{
    constructor(props){
        super(props);
        this.state= {

        }
    }           

    render(){       
        return <div className="scoreboard">
            <h3>SCORE: {this.props.score}</h3>
        </div>
    }
}

export default Scoreboard;