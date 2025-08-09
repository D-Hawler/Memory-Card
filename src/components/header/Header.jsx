import Score from '../score/Score';

import './Header.css';

function Header({ score, isEndOfGame }) {
    return <header>
        <h1>Memo</h1>
        <Score score={score} isEndOfGame={isEndOfGame} />
    </header>;
};

export default Header;
