import { useEffect, useState } from 'react';
import { TrainerContext } from './TrainerContext';

export const TrainerProvider = ({ children }) => {
    const [bag, setBag] = useState([]);
    const nameTable = "tableBag";

    useEffect(() => {
        getData()
    }, []);

    function addPokemon(pokemon) {

        var isExist = false
        bag.forEach(item => {
            if (item.id === pokemon.id)
                isExist = true
        })

        if (isExist === true || bag.length === 5)
            return

        const bagAux = [...bag]
        const dataPokemon = {
            name: pokemon.name,
            types: pokemon.types,
            id: pokemon.id,
            sprites: pokemon.sprites
            }
        bagAux.push(dataPokemon)
        setBag(bagAux)
        saveData(bagAux)
    }

    function getData() {
        const data = localStorage.getItem(nameTable);
        console.log(data)

        if (data)
            setBag(JSON.parse(data))
    }

    function saveData(bag) {

        localStorage.setItem(nameTable, JSON.stringify(bag));

    }

    return (
        <TrainerContext.Provider
            value={{
                bag,
                setBag,
                addPokemon,
                getData,
                saveData
            }}
        >
            {children}
        </TrainerContext.Provider>
    );
};