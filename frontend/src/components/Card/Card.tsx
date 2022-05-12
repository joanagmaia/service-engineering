import "./card.css";

type PropTypes = {
  children: React.ReactNode;
};

const Card = ({ children }: PropTypes) => {
  return <div className="card">{children}</div>;
};

export default Card;
