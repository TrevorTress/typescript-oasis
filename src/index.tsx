import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import Router from './routes/Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/layout/X-Main';

function App() {
	return (
		<>
			<GlobalStyles />
			<Main>
				<Router />
			</Main>
		</>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
