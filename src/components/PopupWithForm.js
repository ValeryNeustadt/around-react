import React from 'react';

function PopupWithForm(props) {
  const { name, title, children, buttonText, isOpen, onClose } = props;

  return (
    <div
      className={`popup  ${isOpen ? 'popup_opened' : ''}`}
      id={`popup__${name}`}
    >
      <div className='popup__window'>
        <h2 className='popup__header'>{title}</h2>
        <form
          id={`${name}`}
          action='submit'
          className='form popup__form'
          name={`${name}`}
        >
          {children}
          <button
            id={`${name}__submit-button`}
            type='submit'
            className='form__button'
          >
            {buttonText}
          </button>
        </form>
      </div>
      <button
        id={`${name}__close-button`}
        className='popup__close-button'
        type='button'
        aria-label='close button'
        onClick={onClose}
      ></button>
    </div>
  );
}

export default PopupWithForm;
