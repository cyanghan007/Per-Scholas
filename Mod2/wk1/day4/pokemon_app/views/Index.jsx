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

const name = {
  backgroundColor: 'grey',
  color: 'white',
  padding: '14px 25px',
  textAlign: 'center',
  textDecoration: 'none',
  border: '1px solid black',
  display: 'inline-block'
}

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div style={myStyle}>
        <nav>
          <a href="/pokemon/new" style={aStyle}>Create a New Pokemon</a>
        </nav>
        <h1>See All The Pokemon!</h1>
        <ul>
          {pokemon.map((poke) => {
            return (
              <li key={poke.id}>
                <a href={`/pokemon/${poke.id}`} style={name}>{poke.name}</a>
                <form action={`/pokemon/${poke.id}?_method=DELETE`} method="POST" style={{ display: 'inline' }}>
                  <button type="submit" style={aStyle}>Delete</button>
                </form>
              </li>
            );
          })}
        </ul>
      </div>
    )
  }
}

module.exports = Index;