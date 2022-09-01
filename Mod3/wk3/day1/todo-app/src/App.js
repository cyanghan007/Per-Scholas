import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';
import './App.css';
import EditForm from './components/EditForm';
import Nav from './components/Nav';
import Todo from './components/Todo';
import Todos from './components/Todos';

function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
				<h1>ToDo List</h1>
				<Routes>
					<Route path="/" element={<Todos />} />
					<Route path="/:id" element={<Todo />} />
					<Route path="/:id/edit" element={<EditForm />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
