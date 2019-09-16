import React from 'react';
import { RegularPolygon, Line } from 'react-konva';
import { render } from 'react-dom';

class Asteroids extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            numOfSides: 10,
            radius: 15,
            x: props.x,
            y: props.y,
            speed: 1
        }
    }

    
    // componentDidMount() {
    //     console.log('am i on?')
    //     let angularSpeed = 60;
    //     this.anim = new Konva.Animation(frame => {
    //     let angleDiff = (frame.timeDiff * angularSpeed) / 1000;
    //     this.asteroid.rotate(angleDiff);
    //     this.asteroid.cache();
    //     }, this.asteroid.getLayer());
    //     this.anim.start();
    // }

    render () {
        return (
            <RegularPolygon
            x={this.state.x}
            y={this.state.y}
            sides={5}
            radius={20}
            stroke="white"
        />
        )
    }
}

export default Asteroids;
