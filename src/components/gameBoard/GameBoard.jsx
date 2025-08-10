import Card from "../card/Card";
import Loader from "../loader/Loader";

import './GameBoard.css';

function GameBoard({ pokemonData, onCardClick, loseEffect }) {
    if (Array.isArray(pokemonData) && pokemonData.length > 0) {
        return <main>
            {pokemonData.map((card) => (
                <Card loseEffect={loseEffect} key={card.name} src={card.image} name={card.name} onClick={onCardClick} />
            ))}
        </main>;
    } else {
        return <main>
            <Loader />
        </main>;
    };
};

export default GameBoard;
