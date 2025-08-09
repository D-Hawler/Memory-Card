import { useState } from "react";

import './Score.css';

function Score({ score, isEndOfGame }) {
    const [bestScore, setBestScore] = useState(0);

    if (score > bestScore && isEndOfGame) {
        setBestScore(score);
    };

    return <div className="score">
        <p>Current score: {score}</p>
        <p>Best score: {bestScore}</p>
    </div>;
};

export default Score;
