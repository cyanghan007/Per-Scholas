import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Show = ({ data }) => {
	const { id } = useParams();
	const [person, setPerson] = useState([]);

	useEffect(() => {
		const found = data.find((person) => person.id === parseInt(id));
    console.log(found)
    setPerson(found)
	}, []);

	return (
		<div>
			<h1>Show</h1>
      <div>
        <h2>{person.first_name} {person.last_name}</h2>
        <p>{person.email}</p>
        <span>{person.id}</span>{}
      </div>
		</div>
	);
};

export default Show;
