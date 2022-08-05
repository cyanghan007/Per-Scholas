const React = require('react');

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
  textTransform: 'capitalize', ////Easier method to capitalize the first letter
}

const aStyle = {
  backgroundColor: '#f44336',
  color: 'white',
  padding: '14px 25px',
  textAlign: 'center',
  textDecoration: 'none',
  border: '1px solid black',
  display: 'inline'
}

class Show extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div style={myStyle}>
        <nav>
          <a href="/pokemon" style={aStyle}>Home</a>
        </nav>
        <h1>Gotta Catch 'Em All</h1>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.img}></img>
      </div>
    );
  }
}

module.exports = Show;