import React,{Component} from 'react';
import './Home.css'
import {Link} from 'react-router-dom';

class Home extends Component{
    constructor(props){
        super(props);
        this.state= {

        }
    }

    render(){
        return (
            <div className="Main">
                <h1 className="Headinho">El Naruto</h1>
                <div className="Main-bg"></div>
                <Link to="/comienzo" className="Botao">Comienzo</Link>
            </div>
        )
    }
}

export default Home;