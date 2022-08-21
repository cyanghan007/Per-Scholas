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

	state = {
		list: this.props.list.list,
		item: '',
		brand: '',
		units: '',
		quantity: 0,
		image: '',
		isPurchased: false,
	};

	handleChange = (event) => {
		this.setState({ [event.target.id]: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const newItem = {
			item: this.state.item,
			brand: this.state.brand,
			units: this.state.units,
			quantity: this.state.quantity,
			image: this.state.image,
			isPurchased: false,
		};
		this.setState({
			list: [...this.state.list, newItem],
			item: '',
			brand: '',
			units: '',
			quantity: 0,
			image: '',
		});
	};

	render() {
		return (
			<div style={{ backgroundColor: this.props.list.color }}>
				<h2>{this.props.list.name}</h2>
				<div className="list">
					<ul>
						{this.state.list.map((product) => (
							<Item product={product} />
						))}
            <form className="form" onSubmit={this.handleSubmit}>
						<label htmlFor="item">Item</label>
						<br />
						<input
							type="text"
							value={this.state.item}
							onChange={this.handleChange}
							id="item"></input>
						<br />
						<label htmlFor="brand">Brand</label>
						<br />
						<input
							type="text"
							value={this.state.brand}
							onChange={this.handleChange}
							id="brand"></input>
						<br />
						<label htmlFor="units">Units</label>
						<br />
						<input
							type="text"
							value={this.state.units}
							onChange={this.handleChange}
							id="units"></input>
						<br />
						<label>Quantity</label>
						<br />
						<input
							type="number"
							value={this.state.quantity}
							onChange={this.handleChange}
							id="quantity"></input>
						<br />
						<label>Image</label>
						<br />
						<input
							type="text"
							value={this.state.image}
							onChange={this.handleChange}
							id="image"></input>
						<br />
						<button type="submit">Add Item</button>
					</form>
					</ul>

				</div>
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
