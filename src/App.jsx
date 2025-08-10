import { useEffect, useState } from 'react';

import Header from './components/header/Header';
import GameBoard from './components/gameBoard/GameBoard';
import Rules from './components/rules/Rules';

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

let invalidCards = [];

const shuffleArray = (array) => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  };

  return shuffled;
};


function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [loseEffect, setLoseEffect] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isOnRules, setIsOnRules] = useState(false);
  const [isBestScore] = useState(() => {
    const stored = localStorage.getItem('bestScore');
    return stored ? JSON.parse(stored) : 0;
  });

  useEffect(() => {
    loadData().then(data => setPokemonData(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('bestScore', JSON.stringify(bestScore));

    if (bestScore < isBestScore) setBestScore(isBestScore);
  }, [bestScore, isBestScore]);

  if (score > bestScore && isGameOver) {
    setBestScore(score);
  };

  if (isGameOver) {
    invalidCards = [];

    setScore(0);
    setIsGameOver(false);

    setTimeout(() => {
      setLoseEffect(null)
      const newData = shuffleArray(pokemonData);
      setPokemonData(newData);
    }, 500);
  };

  const toggleRules = () => {
    setIsOnRules(prev => !prev);
  };
  
  const onCardClick = (event) => {
    const name = event.currentTarget.dataset.name;
  
    if (invalidCards.some((card) => card === name)) {
      setIsGameOver(true);

      setLoseEffect(name);
    } else {
      invalidCards.push(name);
      setScore((prep) => prep + 1);
  
      const newData = shuffleArray(pokemonData);
      setPokemonData(newData);
    };
  };

  return <>
    <Header toggleRules={toggleRules} score={score} bestScore={bestScore} />
    <GameBoard pokemonData={pokemonData} onCardClick={onCardClick} loseEffect={loseEffect} />
    {isOnRules && <Rules toggleRules={toggleRules} />};
  </>
}

export default App;
