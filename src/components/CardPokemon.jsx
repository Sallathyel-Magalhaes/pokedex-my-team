import React, { useContext } from 'react';
import { Link, json } from 'react-router-dom';
import { Pokemon } from './time'
import { TrainerContext } from '../context/TrainerContext';
import { Container } from '@mui/material';


export const CardPokemon = ({ pokemon }) => {
	const { bag, setBag, addPokemon } = useContext(TrainerContext)
	async function addMyTeam() {

		addPokemon(pokemon)
		console.log(bag)
	}


	return (

		<Container>
			<Link to={`/pokemon/${pokemon.id}`} className='card-pokemon'>
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

			</Link>
			
			<button className='favoritar' onClick={addMyTeam}>Adicionar ao Time</button>
		</Container>


	);

};
