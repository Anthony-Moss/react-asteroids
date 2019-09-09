import React from 'react';
import { RegularPolygon, } from 'react-konva'


class SpaceShip extends React.Component {
    constructor(props) {
        super(props)
    
    this.state={
        color: 'orange'
    }
    }

    render() {
        return (
            <RegularPolygon
                x={200}
                y={300}
                sides={3}
                radius={20}
                fill={this.state.color}
            />
        )
    }
}

export default SpaceShip