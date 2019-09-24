import React from 'react';
import { RegularPolygon, Circle } from 'react-konva';
import Konva from 'konva';
import { connect } from 'react-redux';

class Asteroids extends React.Component {
    constructor(props) {
        super(props)
    }

    
    // componentDidMount() {
    //     let angularSpeed = 60;   
    //     this.anim = new Konva.Animation(frame => {
    //         let angleDiff = (frame.timeDiff * angularSpeed) / 1000;
    //         this.asteroid.rotate(angleDiff);
    //         this.asteroid.cache();
    //     }, this.asteroid.getLayer());
    //     this.anim.start();
    // }


    render () {
        return (
            <RegularPolygon
                x={this.props.x}
                y={this.props.y}
                sides={this.props.numOfSides}
                radius={this.props.radius}
                fill="green"
                stroke="white"
                ref={node => this.asteroid = node}            
            />
        )
    }
}

function mapStateToProps(state) {
    // console.log(state)
    return {
        ...state.game.asteroids
    }
}

export default connect(mapStateToProps)(Asteroids);
