import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import { Homepage } from './components/Homepage/Homepage';
import './App.scss';

function App() {
	const [ fetched, setFetched ] = useState(false);
	const [ rates, setRates ] = useState({});
	const [ error, setError ] = useState('');
	const fetch = async () => {
		try {
			let data = await axios.get(
				`${process.env.NODE_ENV === 'development'
					? 'http://localhost:6002'
					: 'https://mif.sairyonodevs.in'}/api/fetch-currencies`
			);
			setError('');
			setRates(data.data);
			setFetched(true);
		} catch (e) {
			setError('Some Error Occurred!');
		}
	};
	useEffect(() => {
		fetch();
	}, []);
	return (
		<Fragment>
			<Homepage error={error} fetched={fetched} rates={rates} />
		</Fragment>
	);
}

export default App;
