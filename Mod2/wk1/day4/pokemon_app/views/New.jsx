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

class New extends React.Component {
  render() {
    return (
      <div style={myStyle}>
        <nav>
          <a href="/pokemon" style={aStyle}>Home</a>
        </nav>
        <h1>New Pokemon page</h1>
        <form action="/pokemon" method="POST">
          Name: <input type="text" name="name" /><br />
          Image url: <input type="text" name="img" /><br />
          <input type="submit" name="" value="Create Pokemon" style={aStyle} />
        </form>
      </div>
    )
  }
}

module.exports = New;