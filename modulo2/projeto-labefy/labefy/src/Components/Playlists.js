import React from 'react';

export default class Playlists extends React.Component {

    render() {

        return(

            <div>
                <button onClick={this.props.irParaLogin}>Ir para Login</button>
                <h2>Suas Playlists</h2>
            </div>

        )
    }
}