import Card from "../card/Card";
import { ThreeCircles } from 'react-loader-spinner';

import './GameBoard.css';

function GameBoard({ pokemonData }) {
    if (Array.isArray(pokemonData) && pokemonData.length > 0) {
        return <main>
            {pokemonData.map((card) => (
                <Card key={card.name} src={card.image} name={card.name} />
            ))}
        </main>;
    } else {
        return <main>
            <div class='spinnerContainer'>
                <div class='spinner'></div>
            </div>
        </main>;
    };
};

export default GameBoard;
