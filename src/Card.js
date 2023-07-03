import "./styles.css";

const Card = (props) => {
  return (
    <div className={props.class ? `card ${props.class}` : "card"}>
      <div className="image-container">
        <img src={props.imageUrl} alt="card-img" />
      </div>

      <div className="card-text">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-content">{props.content}</p>
      </div>
    </div>
  );
};

export default Card;
