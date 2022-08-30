const React = require('react');

class Index extends React.Component {
  render() {
    const fruits = this.props.fruits;
    return (
            <div>
              <nav>
                <a href="/fruits/new">Create a New Fruit</a>
              </nav>
              <h1>Fruits Index Page</h1>
              <ul>
                {fruits.map(fruit => {
                  return (
                    <li>
                      The <a href={`/fruits/${fruit.id}`}>{fruit.name}</a> is {fruit.color}
                      <br></br>
                      {fruit.readyToEat ? `It is ready to eat` : `It is not ready to eat`}
                    </li>
                  )
                })}
              </ul>
            </div>
    )
  }
}

module.exports = Index;