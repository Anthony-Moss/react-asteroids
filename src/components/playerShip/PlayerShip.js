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
            speed: 8,
            keys: {
                left: 0,
                right: 0,
                up: 0,
                space: 0
            },
            
        }
    }

    handleKeyPress(value, e) {
        let keys = this.state.keys;
        let rotation = this.state.rotation
        let x = this.state.x
        let y = this.state.y
        console.log(e)

        switch (e.keyCode) {
            // when left ship rotates
            case 37:
                rotation -= 9
                break;
            // when right ship rotates
            case 39:
                rotation += 9
                break;
            // when up ship accelerates
            case 38: 
                x -= Math.sin(-(rotation - 65)*Math.PI/180) * this.state.speed;
                y -= Math.cos(-(rotation - 65)*Math.PI/180) * this.state.speed;
                break;
            // when space ship fires projectile
            case 32: keys.space = value;
                break;
            default:
                break;
        }
    
        this.setState({
            x,
            y,
            rotation
        });
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyPress.bind(this, true))
        // window.addEventListener('keyup', this.handleKeyPress.bind(this, false))
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



        // let keys = this.state.keys;
        // let rotation = this.state.rotation
        // let x = this.state.x
        // let y = this.state.y
        // switch (e.keyCode) {
        //     // when left ship rotates
        //     case 37:
        //         rotation = this.state.rotation - 6
        //         break;
        //     case 65: keys.left = value;
        //         break;
        //     // when right ship rotates
        //     case 39: this.setState({
        //         rotation: this.state.rotation + 6
        //     });
        //         break;
        //     case 68: keys.right = value;
        //         break;
        //     // when up ship accelerates
        //     case 38: 
        //     x = this.state.x - Math.sin(-(this.state.rotation - 65)*Math.PI/180) * this.state.speed;
        //     y = this.state.y - Math.cos(-(this.state.rotation - 65)*Math.PI/180) * this.state.speed;
        //     //     this.setState({
        //     //     x,
        //     //     y
        //     // });
        //     break;
        //     case 87: keys.up = value;
        //         break;
        //     // when space ship fires projectile
        //     case 32: keys.space = value;
        //         break;
        //     default:
        //         this.setState(...this.state)
        //         break;
        // }