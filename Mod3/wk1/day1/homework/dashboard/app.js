class Sidenav extends React.Component {
	render() {
		return (
			<nav className="sidenav col ">
				<ul >
					<li>
						<a href="#">Dashboard</a>
					</li>
					<li>
						<a href="#">Widget</a>
					</li>
					<li>
						<a href="#">Reviews</a>
					</li>
					<li>
						<a href="#">Customers</a>
					</li>
					<li>
						<a href="#">Online Analysis</a>
					</li>
					<li>
						<a href="#">Settings</a>
					</li>
				</ul>
			</nav>
		);
	}
}

class Reviews extends React.Component {
	render() {
		return (
			<section className="reviews col">
				<h5>Reviews</h5>
				<h2>1,281</h2>
			</section>
		);
	}
}

class AverageRating extends React.Component {
	render() {
		return (
			<section className="average-rating col">
				<h5>Average Rating</h5>
				<h2>4.6</h2>
			</section>
		);
	}
}

class Sentiment extends React.Component {
	render() {
		return (
			<section className="sentiment col">
				<h5>Sentiment Analysis</h5>
				<h2>960</h2>
				<h2>122</h2>
				<h2>321</h2>
			</section>
		);
	}
}

class Visitors extends React.Component {
	render() {
		return (
			<section className="visitors col">
				<h5>Website Visitors</h5>
				<h2>821</h2>
				<div className="graph"></div>
			</section>
		);
	}
}

class App extends React.Component {
	render() {
		return (
			<div className="wrapper">
				<Sidenav />
				<Reviews />
				<AverageRating />
				<Sentiment />
				<Visitors />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('main'));
