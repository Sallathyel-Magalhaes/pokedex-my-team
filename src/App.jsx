import { AppRouter } from './AppRouter';
import { PokemonProvider } from './context/PokemonProvider';
import { TrainerProvider } from './context/TrainerProvider';

function App() {
	return (
		<TrainerProvider>
			<PokemonProvider>
				<AppRouter />
			</PokemonProvider>
		</TrainerProvider>
	);
}

export default App;