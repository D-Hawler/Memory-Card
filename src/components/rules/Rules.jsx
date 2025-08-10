import './Rules.css';

function Rules({ toggleRules }) {
    return <>
        <div class="overlay"></div> 
        <div className="rules">
            <div>
                <h1>Memory Card</h1>
                <div>
                    <h2>Your Goal:</h2>
                    <p>- Click on unique cards without repeating any.</p>
                </div>
                <div>
                    <h2>Each Click:</h2>
                    <p>- If you click on a new card - you get a point.</p>
                    <p>- If you click on a card you've already selected - the game resets (your score goes back to zero).</p>
                </div>
                <div>
                    <h2>After Each Click </h2>
                    <p>- The cards are shuffled to make memorizing their positions harder.</p>
                </div>
                <div>
                    <h2>Victory</h2>
                    <p>- Score the maximum number of unique clicks (20 points) without making a mistake.</p>
                </div>
                <button onClick={toggleRules}>Close</button>
            </div>
        </div>
    </>
};

export default Rules;
