import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomePage from './pages/home';
import SignUpPage from './pages/signUp';
import SignInPage from './pages/signIn';

function App() {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/signup" element={<SignUpPage />} />
				<Route path="/signin" element={<SignInPage />} />
			</Routes>
		</Router>
	);
}

export default App;





