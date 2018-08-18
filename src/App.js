import React, { Component } from 'react'
import logo from './logo.svg'
import io from 'socket.io-client'
import './App.css'
const socket = io.connect('http://localhost:5000/')

const SAMPLE_GAME_STATE = {
    // parameters
    maxTracks: 8,
    maxLifes: 3,
    intervalBetweenShots: 0.2,
    projectileSpeed: 2,

    // game state
    playerLifes: 2, 
    playerTrack: 0, // which track the player is looking at
    playerShotCooldown: 0, // amount of ticks before allowed to shoot again (can shoot if 0)
    projectiles: [ // array of current projectiles
        { track: 1, position: 0.5, id: 'projectile1' },
        { track: 3, position: 0.3, id: 'projectile2' }
    ],
    enemies: [
        { track: 1, position: 0.8, speed: 0.4, id: 'enemy1' },
        { track: 2, position: 0.7, speed: 0.4, id: 'enemy1' },
        { track: 3, position: 0.1, speed: 0.4, id: 'enemy1' },
        { track: 4, position: 0.2, speed: 0.3, id: 'enemy2' }
    ],
    tick: 15
}

class App extends Component {

    constructor(props) {
        super(props)

        this.degPerTrack = 360 / SAMPLE_GAME_STATE.maxTracks
        this.maxDistance = 400

        this.state = {
            playerLifes: SAMPLE_GAME_STATE.playerLifes, 
            playerTrack: SAMPLE_GAME_STATE.playerTrack, // which track the player is looking at
            playerShotCooldown: SAMPLE_GAME_STATE.playerShotCooldown, // amount of ticks before allowed to shoot again (can shoot if 0)
            enemies: SAMPLE_GAME_STATE.enemies, // amount of ticks before allowed to shoot again (can shoot if 0)
        }
    }

    componentDidMount() {

        // socket.on('game_state', () => {
            
        // })

        window.addEventListener('keydown', (e) => {
            switch (e.code) {
                case 'KeyD':
                    // socket.emit('turn_right', { side: 'right' })
                    this.setState({ playerTrack: (this.state.playerTrack + 1) % SAMPLE_GAME_STATE.maxTracks })
                    break;
                case 'KeyA':
                    // socket.emit('turn_left', { side: 'left' })
                    this.setState({ playerTrack: (this.state.playerTrack - 1) % SAMPLE_GAME_STATE.maxTracks })
                    break;
            }
            
        })
    }

    render() {
        return (
            <div className="App">
                <content className='game'>
                    {
                        this.state.enemies.map(enemy => (
                            <img src='/dino.png' className='enemy'  
                                style={{ transform: `rotate(${enemy.track * this.degPerTrack}deg) translate(${-enemy.position * this.maxDistance}px, 0px)` }} />
                        ))
                    }
                    <img src='/narto.png' className='player' 
                        style={{ transform: `rotate(${this.state.playerTrack * this.degPerTrack}deg)` }}/>
                </content>
            </div>
        )
    }
}

export default App
