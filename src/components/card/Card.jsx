import './Card.css';


function Card({ loseEffect, src, name, onClick }) {
    return <div
                className={`card ${loseEffect === name ? 'loseEffect' : ''}`}
                onClick={onClick}
                data-name={name}
            >
        <div>
            <img src={src} alt={name} />
            <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
        </div>
    </div>;
};

export default Card;
