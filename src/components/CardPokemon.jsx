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
			<button className='favoritar' onClick={addMyTeam} class="noselect"><span class="text">Add Time</span><span class="icon"><svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"></svg><span class="buttonSpan">+</span></span></button>
		</Container>


	);

};
