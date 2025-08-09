import { useEffect, useState } from 'react'

import Header from './components/header/header';
import GameBoard from './components/gameBoard/GameBoard';

import './App.css'


async function loadData() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=0');
  const data = await response.json();
  const total = data.count;
  const count = 20;
  
  async function fetchPokemon(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!res.ok) return null;
    const p = await res.json();
    return {
      name: p.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`
    };
  };

  async function loadPokemons(count, total) {
    const pokemons = new Set();
    const seenIds = new Set();
    while (pokemons.size < count) {
      const id = Math.floor(Math.random() * total) + 1;
      if (!seenIds.has(id)) {
        seenIds.add(id);
        const pokemon = await fetchPokemon(id);
        if (pokemon) pokemons.add(JSON.stringify(pokemon));
      }
    }
    return Array.from(pokemons).map(p => JSON.parse(p));
  }

  return loadPokemons(count, total);
};


function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    loadData().then(data => setPokemonData(data));
  }, []);

  return <>
    <Header />
    <GameBoard pokemonData={pokemonData} />
  </>
}

export default App
