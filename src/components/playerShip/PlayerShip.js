import React from 'react';
import { Wedge } from 'react-konva'


class SpaceShip extends React.Component {
    constructor(props) {
        super(props)
    
        this.state={
            color: 'purple',
            x: props.x,
            y: props.y,
            angle: 50,
            rotation: props.rotation,
            speed: 8
            
        }
    }

    static getDerivedStateFromProps(props, state) {
        let keyValue = props.keyPress;
        let rotation = state.rotation;
        let speed = state.speed
        console.log(keyValue)

        let x = state.x - Math.sin(-(rotation - 65)*Math.PI/180) * speed;
        let y = state.y - Math.cos(-(rotation - 65)*Math.PI/180) * speed;
        const change = {
            x: state.x,
            y: state.y,
            rotation
        }
        while (keyValue.left) {
            change.rotation -= 9
            return change
        }
        while (keyValue.right) {
            change.rotation += 9
            return change
        }
        while (keyValue.up) {
            change.x = x
            change.y = y
            return change
        }
        
    }

    render() {
        return (
            <Wedge
                x={this.state.x}
                y={this.state.y}
                radius={35}
                fill={this.state.color}
                stroke={'grey'}
                strokeWidth={1}
                angle={this.state.angle}
                rotation={this.state.rotation}
                shadowColor= {'yellow'}
                shadowBlur={7}
                ref={node => this.wedge = node}
                tabIndex='0' onKeyDown={(event) => {
                    console.log("is this on?")
                    }}
            />
        )
        
        
    }
    handleRotation = () => {
        let rotation = this.state.rotation

        this.setState({
            ...this.state,

        })
    }
}

export default SpaceShip







        // switch (keyValue) {
        //     case left: return { rotation: rotation - 9 }
        //         break;
        //     case right: return { rotation: rotation + 9 }
        //         break;
        //     case forward: return { x, y }
        //         break;
        // }
        // const change = { x, y, rotation }
        // if (keyValue.left == true) {
        //     return rotation - 9

        // } else if (keyValue.right == true) {
        //     change.roation = rotation + 9
        //     return change
        // } else if (keyValue.up == true) {
        //     change.x = x
        //     change.y = y
        //     return change
        // }