const React = require('react');

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
  textTransform: 'capitalize',
  textDecoration: 'none',////Easier method to capitalize the first letter
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

class Edit extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div style={myStyle}>
        <nav>
          <a href="/pokemon" style={aStyle}>Home</a>
        </nav>
        <h1>Edit Pokemon page</h1>
        <form action={`/pokemon/${pokemon.id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" /><br />
          Image url: <input type="text" name="img" /><br />
          <input type="submit" name="" value="Edit Pokemon" style={aStyle} />
        </form>
      </div>
    )
  }
}

module.exports = Edit;