class App extends React.Component {
	state = { lists: lists };

	render() {
		return (
			<div className="container">
				<h1>Grocery List</h1>
				{this.state.lists.map((list) => (
					<List list={list} />
				))}
			</div>
		);
	}
}

class List extends React.Component {
	constructor(props) {
		super(props);
	}

	state = { list: this.props.list };

	render() {
		return (
			<div style={{ backgroundColor: this.props.list.color }}>
				<h2>{this.props.list.name}</h2>
				<ul className="list">
					{this.props.list.list.map((product) => (
						<Item product={product} />
					))}
				</ul>
			</div>
		);
	}
}

class Item extends React.Component {
	state = {
		later: false,
		isPurchased: this.props.product.isPurchased,
	};

	toggleLater = () => this.setState({ later: !this.state.later });

	toggleIsPurchased = () =>
		this.setState({ isPurchased: !this.state.isPurchased });

	render() {
		return !this.state.isPurchased ? (
			<li
				className={this.state.later ? 'listItem later' : 'listItem'}>
				<div className="cardImage">
					<img src={this.props.product.image}></img>
				</div>
				<div className="cardMain">
					<h3>Item: {this.props.product.item}</h3>
					<p>Brand: {this.props.product.brand}</p>
					<p>
						Quantity: {this.props.product.quantity}{' '}
						{this.props.product.units}
					</p>
				</div>
				<div className="cardButtons">
					<button onClick={this.toggleLater}>Later</button>
					<button onClick={this.toggleIsPurchased}>Remove</button>
				</div>
			</li>
		) : null;
	}
}

ReactDOM.render(<App />, document.querySelector('main'));
