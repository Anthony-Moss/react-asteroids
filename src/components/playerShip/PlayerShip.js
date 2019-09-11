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
        let x = this.state.x - Math.sin(-(this.state.rotation - 65)*Math.PI/180) * this.state.speed;
        let y = this.state.y - Math.cos(-(this.state.rotation - 65)*Math.PI/180) * this.state.speed;
        switch (e.keyCode) {
            // when left ship rotates
            case 37: this.setState({
                rotation: this.state.rotation - 6
            });
                break;
            case 65: keys.left = value;
                break;
            // when right ship rotates
            case 39: this.setState({
                rotation: this.state.rotation + 6
            });
                break;
            case 68: keys.right = value;
                break;
            // when up ship accelerates
            case 38: this.setState({
                x,
                y
            });
            break;
            case 87: keys.up = value;
                break;
            // when space ship fires projectile
            case 32: keys.space = value;
                break;
            default:
                this.setState(...this.state)
                break;
        }
    
        this.setState({
            keys
        });
    }

    componentDidMount() {
        // window.addEventListener('keyup', this.handleKeyPress.bind(this, false));
        window.addEventListener('keydown', this.handleKeyPress.bind(this, true))
    }

    // static getDerivedStateFromProps(props, state) {
    //     let keyValue = props.keyPress;
    //     let rotation = state.rotation;
    //     let speed = state.speed

    //     let x = state.x - Math.sin(-(rotation - 65)*Math.PI/180) * speed;
    //     let y = state.y - Math.cos(-(rotation - 65)*Math.PI/180) * speed;
    //     const change = {
    //         x: state.x,
    //         y: state.y,
    //         rotation
    //     }


    //     if (keyValue.left) {
    //         let x = state.x - Math.sin(-(state.rotation - 65)*Math.PI/180) * state.speed;
    //         let y = state.y - Math.cos(-(state.rotation - 65)*Math.PI/180) * state.speed;
    //         if (keyValue.up) {
    //             return {rotation: rotation - 7, x: x, y: y}
    //     } else {
    //         return {rotation: rotation - 7}
    //     }
    // }
    
    // else if (keyValue.right) {
    //     let x = state.x - Math.sin(-(state.rotation - 65)*Math.PI/180) * state.speed;
    //     let y = state.y - Math.cos(-(state.rotation - 65)*Math.PI/180) * state.speed;
    //     if (keyValue.up) {
    //     return {rotation: rotation + 7, x: x, y: y}
    //     } else {
    //         return {rotation: rotation + 7}
    //     }
    // }
    
    // // console.log(keyValue.up);
    // else if (keyValue.up) {
    //     if (keyValue.left) {
    //     let x = state.x - Math.sin(-(state.rotation - 65)*Math.PI/180) * state.speed;
    //     let y = state.y - Math.cos(-(state.rotation - 65)*Math.PI/180) * state.speed;
    //         // let rotation = {rotation: rotation - 7}
    //         return { x: x, y: y, rotation: rotation - 7}
    //     } else {
    //         let x = state.x - Math.sin(-(state.rotation - 65)*Math.PI/180) * state.speed;
    //         let y = state.y - Math.cos(-(state.rotation - 65)*Math.PI/180) * state.speed;
    //         return {
    //             x,
    //             y
    //         }
    //     }; 
    // } else {
    //     return {state}
    // }
        
    // }

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