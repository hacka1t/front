import React,{Component} from 'react';

class Lifebar extends Component{
    constructor(props){
        super(props);
        this.state= {

        }
    }           

    render(){       
        let renderHearts = [];
        for(let i = 0; i < this.props.playerLifes; i++){
            renderHearts.push(<img src="/life.png" className='life' alt='life'/>)
        }
        return <div className='lifebar'>
                    {
                    renderHearts
                    }
                </div>
    }
}

export default Lifebar;