function Card(props) {
  const { card, onCardClick, onConfirmClick } = props;
  const { name, link, likes } = card;

  const handleClick = () => {
    onCardClick(card);
  };

  return (
    <div className='element'>
      <button
        className='element__trash-button'
        type='button'
        aria-label='trash-button'
        onClick={onConfirmClick}
      ></button>
      <img
        src={link}
        alt={`${name}`}
        className='element__photo'
        onClick={handleClick}
      />
      <div className='element__header'>
        <h2 id='id_element__header' className='element__text'>
          {name}
        </h2>
        <div className='element__button-like-section'>
          <button
            className='element__button-like'
            type='button'
            aria-label='like button'
          ></button>
          {likes.length > 0 && (
            <p className='element__number-like'>{likes.length}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
