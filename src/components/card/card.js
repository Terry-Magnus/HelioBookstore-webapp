import "../card/card.scss"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.image} alt={props.title} />
            <h2>{props.title}</h2>
            <p>By <br />{props.author.length > 1 ? props.author.join(", ") : props.author}</p>
        </div>
    );
}