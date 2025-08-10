import './Score.css';

function Score({ score, bestScore }) {
    return <div className="score">
        <p>Current score: {score}</p>
        <p><span className={`${bestScore === 20 && 'glowGold'}`}>Best score: {bestScore}</span></p>
    </div>;
};

export default Score;
