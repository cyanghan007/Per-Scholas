const React = require('react');

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
  // textTransform: 'capitalize', ////Easier method to capitalize the first letter
}

class Index extends React.Component {
  render() {
    const {pokemon} = this.props;
    return (
            <div style={myStyle}>
              <nav>
                <a href="/pokemon/new">Create a New Pokemon</a>
              </nav>
              <h1>See All The Pokemon!</h1>
              <ul>
                {pokemon.map((poke) => {
                  return (
                    <li>
                      <a href={`/pokemon/${poke.id}`}>{poke.name}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
    )
  }
}

module.exports = Index;