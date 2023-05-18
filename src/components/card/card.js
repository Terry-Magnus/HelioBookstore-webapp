import "../card/card.scss"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.image} alt={props.title} />
            <h3>{props.title}</h3>
            <button className="btn-default">Buy Now</button>
        </div>
    );
}