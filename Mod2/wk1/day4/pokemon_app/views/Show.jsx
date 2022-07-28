const React = require('react');

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
  // textTransform: 'capitalize', ////Easier method to capitalize the first letter
}

class Show extends React.Component {
  render() {
    const pokemon = this.props.pokemon;
    return (
            <div style={myStyle}>
              <h1>Gotta Catch 'Em All</h1>
              <h2>{pokemon.name}</h2>
              <img src={pokemon.img + '.jpg'}></img>
              <br></br>
              <a href="/pokemon">back</a>
            </div>
    );
  }
}

module.exports = Show;