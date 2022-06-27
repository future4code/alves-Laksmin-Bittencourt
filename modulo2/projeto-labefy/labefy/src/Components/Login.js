import React from 'react';

export default class Login extends React.Component {
  

    render() {

        return (

            <div>
                <button onClick={this.props.irParaPlaylists}>Ir para playlists</button>
                <h2>Cadstre-se na Labefy!</h2>
                <h4>Mais de 200.000 artistas para você ouvir!</h4>
            </div>

        )
    }
}