const ReviewCard = ({ review }) => {
  const { name, vote, text } = review;
  return (
    <div className="review-card">
      <h3>{name}</h3>
      <p>
        <span>Voto: {vote}</span>
      </p>
      <p>
        <span>{text}</span>
      </p>
    </div>
  );
};

export default ReviewCard;
