import Score from '../score/Score';

import './Header.css';

function Header({ toggleRules, score, bestScore }) {
    return <header>
        <div>
            <h1>Memo</h1>
            <div>
                <div onClick={toggleRules}>Rules</div>
            </div>
        </div>
        <Score score={score} bestScore={bestScore} />
    </header>;
};

export default Header;
