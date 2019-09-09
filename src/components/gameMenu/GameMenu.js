import React from 'react';

class GameMenu extends React.Component {
    constructor(props) {
        super(props)

        this.state={

        }
    }

    render() {
        return (
            <div>
                <div className="gameMenu">
                    {/* stars will be in background */}
                    {/* This button will be used to start game */}
                    {/* <button display={menuOn ? flex : none } onclick={gameStart} value="Start" /> */}
                    <button>Start Game</button>
                </div>
            </div>
        )
    }
}