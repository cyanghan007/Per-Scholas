class Receipt extends React.Component {
	constructor(props) {
		super(props);
	}

	state = {
		isPaid: this.props.receipt.paid,
	};

	togglePaid = () => {
		this.setState({ isPaid: !this.state.isPaid });
	};

	render() {
		return !this.state.isPaid ? (
			<div onClick={this.togglePaid}>
				<div>
					<h2>{this.props.receipt.person}</h2>
				</div>
				<div>
					<p>Main: {this.props.receipt.order.main}</p>
					<p>Protein: {this.props.receipt.order.protein}</p>
					<p>Rice: {this.props.receipt.order.rice}</p>
					<p>Sauce: {this.props.receipt.order.sauce}</p>
					<p>
						Toppings: {this.props.receipt.order.toppings.join(', ')}
					</p>
					<p>Drink: {this.props.receipt.order.drink}</p>
					<p>Cost: {this.props.receipt.order.cost}</p>
				</div>
			</div>
		) : null;
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	state = {
		receipts: receipts,
	};

	render() {
		return (
			<div>
				<h1>Korilla</h1>
				{this.state.receipts.map((receipt) =>
					!receipt.paid ? <Receipt receipt={receipt} /> : null,
				)}
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('main'));
