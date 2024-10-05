import MapComponent from '../Components/MapComponent';
import logo from '../assets/logo.png';

function HomePage() {
	return (
		<div>
			<main className="flex bg-custom-gradient h-screen">
				<div className="w-1/2 p-8 flex flex-col justify-center items-center text-center">
					<img src={logo} alt="Logo" className="w-80 h-40" />
					<p className="mb-2 text-white">
						Join fellow players in your area and connect over your favorite trading card game!
						Locate players near you, share strategies, and challenge each other to epic duels!
					</p>
					<p className='text-white'>
						Use the map to find players nearby and get ready for your next duel!
					</p>
					<ul className="mt-4 flex space-x-2">
						<li className="bg-white text-black px-4 py-2 rounded-lg">Get started</li>
					</ul>
				</div>

				<div className="w-1/2 flex flex-col justify-end relative">
					<MapComponent players={[]} height="70%" width="100%" imageSrc="https://www.yugioh-card.com/eu/wp-content/uploads/2022/04/Yugi.webp" />
				</div>
			</main>
			<footer className="bg-white p-4 text-center">
				<p className="text-black">Made with ❤️ by Yugi-Oh! fans</p>
			</footer>
		</div>
	);
}

export default HomePage;