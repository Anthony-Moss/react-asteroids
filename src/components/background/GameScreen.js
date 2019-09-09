import React from 'react';
import { Rect } from 'react-konva';



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
                display={'flex'}
                x={20}
                y={20}
                width={1000}
                height={800}
                fill={this.state.color}
            />
        )
    }
}

export default GameScreen