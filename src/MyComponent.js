import React, { Component } from 'react';

class MyComponent extends Component
{    
    state = {
        games : ["리그 오브 레전드", "배틀 그라운드", "오버워치"]
    }

    render(){
        const gameList = this.state.games.map(
            (game, index) => (<li key = {index}>{game}</li>)
        );

        return(
            <ul>
                {gameList}
            </ul>
        );
    };
}

export default MyComponent;