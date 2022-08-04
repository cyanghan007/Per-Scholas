const React = require('react');

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
  textTransform: 'capitalize', ////Easier method to capitalize the first letter
}

class Show extends React.Component {
  render() {
    const {pokemon} = this.props;
    return (
            <div style={myStyle}>
              <nav>
                <a href="/pokemon">Home</a>
              </nav>
              <h1>Gotta Catch 'Em All</h1>
              <h2>{pokemon.name}</h2>
              <img src={pokemon.img}></img>
            </div>
    );
  }
}

module.exports = Show;