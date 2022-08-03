const React = require('react');

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
  // textTransform: 'capitalize', ////Easier method to capitalize the first letter
}

class New extends React.Component {
  render() {
    return (
            <div style={myStyle}>
              <nav>
                <a href="/pokemon">Home</a>
              </nav>
              <h1>New Pokemon page</h1>
              <form action="/pokemon" method="POST">
                Name: <input type="text" name="name" /><br/>
                Image url: <input type="text" name="image" /><br/>
                <input type="submit" name="" value="Create Pokemon"/>
              </form>
            </div>
    )
  }
}

module.exports = New;