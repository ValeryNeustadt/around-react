import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlaceFormPopup(props) {
  const { isOpen, onClose } = props;
  return (
    <PopupWithForm
      name='addplaceform'
      title='New place'
      buttonText='Create'
      isOpen={isOpen}
      onClose={onClose}
    >
      <fieldset className='form__fieldset'>
        <input
          type='text'
          className='form__input'
          id='addplaceform__title'
          name='title'
          placeholder='Title'
          required
          minLength={2}
          maxLength={30}
        />
        <span className='form__input-title-error form__error'>no errors</span>
        <input
          type='url'
          className='form__input'
          id='addplaceform__image-link'
          name='image-link'
          placeholder='Image link'
          required
        />
        <span className='form__input-image-link-error form__error'>
          no errors
        </span>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlaceFormPopup;
