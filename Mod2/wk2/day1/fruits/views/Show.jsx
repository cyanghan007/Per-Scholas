const React = require('react');

class Show extends React.Component {
  render() {
    const fruit = this.props.fruit;
    return(
      <div>
        <nav>
          <a href="/fruits">Home</a>
        </nav>
        <h1>Show Page</h1>
        <p>The {fruit.name} is {fruit.color}.</p>
        <p>{fruit.readyToEat ? 'It is ready to eat' : 'It is not ready to eat...Cant touch this'}.</p>
      </div>
    )
  }
}

module.exports = Show;