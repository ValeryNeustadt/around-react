import React from "react";

function ImagePopup(props) {
  const { onClose, selectedCard } = props;
  const { link, name } = selectedCard;

  return (
    <div
      className={`popup  ${selectedCard ? "popup_opened" : ""}`}
      id='imagepreview'
    >
      <button
        id='imagepreview__close-button'
        className='popup__close-button'
        type='button'
        aria-label='close button'
        onClick={onClose}
      ></button>
      <img
        id='imagepreview__picture'
        src={link}
        alt='Preview'
        className='popup__image-content'
      />
      <h2 id='imagepreview__header' className='popup__image-header'>
        {name}
      </h2>
    </div>
  );
}

export default ImagePopup;
