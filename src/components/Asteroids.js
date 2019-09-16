import React from 'react';
import { RegularPolygon, Line } from 'react-konva';
import { render } from 'react-dom';

class Asteroids extends React.Component {
    constructor(props) {
        super(props)

        let getSides = () => {
            let min = 5;
            const max = 10;
            const sides = Math.floor(Math.random() * (max - min + 1) + min)
            return sides
        }


        this.state = {
            numOfSides: getSides(),
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
            sides={this.state.numOfSides}
            radius={20}
            stroke="white"
        />
        )
    }
}

export default Asteroids;
