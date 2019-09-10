import React from 'react';
import { Rect, Wedge } from 'react-konva';



require('./background.css')

class GameScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            color: 'black',
        }
    }


    render() {
        return (
            <Rect
                x={20}
                y={20}
                width={1200}
                height={800}
                fill={this.state.color}
            />
        )
    }
}

export default GameScreen