import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage, MeuTime, PokemonPage, SearchPage } from './pages';







export const AppRouter = () => {
	return (

		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<HomePage />} />
				<Route path='pokemon/:id' element={<PokemonPage />} />
				<Route path='search' element={<SearchPage />} />
				<Route path='time' element={<MeuTime />} />

			</Route>

			<Route path='*' element={<Navigate to='/' />} />
		</Routes>


	);
};
