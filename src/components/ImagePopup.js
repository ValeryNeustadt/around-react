import React from 'react';
import PopupWithForm from './PopupWithForm';

function ImagePopup(props) {
  const { isOpen, onClose } = props;
  return (
    <div class='popup' id='imagepreview'>
      <button
        id='imagepreview__close-button'
        class='popup__close-button'
        type='button'
        aria-label='close button'
      ></button>
      <img
        id='imagepreview__picture'
        src=' '
        alt='Photo Preview'
        class='popup__image-content'
      />
      <h2 id='imagepreview__header' class='popup__image-header'>
        New place
      </h2>
    </div>
  );
}

export default ImagePopup;
