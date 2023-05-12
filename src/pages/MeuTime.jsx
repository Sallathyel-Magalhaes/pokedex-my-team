import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { TrainerContext } from '../context/TrainerContext';

export const MeuTime = () => {
	const { bag, setBag, addPokemon } = useContext(TrainerContext)
	function cardPokemon(pokemon) {
		return (

			<Link to={`/pokemon/${pokemon.id}`} className='card-pokemon' key={pokemon.id}>
				<div className="estiloCard">
					<div className='card-img'>
						<img
							src={pokemon.sprites.other.dream_world.front_default}
							alt={`Pokemon ${pokemon.name}`}
						/>
					</div>
					<div className='card-info'>
						<span className='pokemon-id'>N° {pokemon.id}</span>
						<h3>{pokemon.name}</h3>
						<div className='card-types'>
							{pokemon.types.map(type => (
								<span key={type.type.name} className={type.type.name}>
									{type.type.name}
								</span>

							))}


						</div>

					</div>
				</div>

			</Link>


		);
	}
	return (
		<>{bag.map(item => cardPokemon(item))}</>

	)

};

