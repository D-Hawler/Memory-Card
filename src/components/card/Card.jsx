import './Card.css';


function Card({ src, name }) {
    return <div className="card">
        <img src={src} alt={name} />
        <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
    </div>;
};

export default Card;
