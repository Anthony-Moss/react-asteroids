import React from 'react';
import { RegularPolygon, Wedge } from 'react-konva'


class SpaceShip extends React.Component {
    constructor(props) {
        super(props)
    
        this.state={
            color: 'purple',
            startX: 500,
            startY: 400,
            angle: 50,
            rotation: 65
        }
    }

    render() {
        return (
            <Wedge
                x={600}
                y={400}
                radius={35}
                fill={this.state.color}
                stroke={'grey'}
                strokeWidth={1}
                angle={50}
                rotation={65}
                shadowColor= {'yellow'}
                shadowBlur={7}
                ref={node => this.wedge = node}
            />
        )
    }
}

export default SpaceShip