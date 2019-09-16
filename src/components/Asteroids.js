import React from 'react';
import { RegularPolygon, Line } from 'react-konva';
import Konva from 'konva';

class Asteroids extends React.Component {
    constructor(props) {
        super(props)

        let getSides = () => {
            let min = 5;
            const max = 10;
            const sides = Math.floor(Math.random() * (max - min + 1) + min)
            return sides
        }

        let getRadius = () => {
            let min = 10;
            const max = 75;
            const radius = Math.floor(Math.random() * (max - min + 1) + min)
            return radius
        }

        this.state = {
            numOfSides: getSides(),
            radius: getRadius(),
            x: props.x,
            y: props.y,
            speed: 1
        }
    }

    
    componentDidMount() {
        let angularSpeed = 60;
        this.anim = new Konva.Animation(frame => {
        let angleDiff = (frame.timeDiff * angularSpeed) / 1000;
        this.asteroid.rotate(angleDiff);
        this.asteroid.cache();
        }, this.asteroid.getLayer());
        this.anim.start();
    }

    render () {
        return (
            <RegularPolygon
            x={this.state.x}
            y={this.state.y}
            sides={this.state.numOfSides}
            radius={this.state.radius}
            stroke="white"
            ref={node => this.asteroid = node}
        />
        )
    }
}

export default Asteroids;
