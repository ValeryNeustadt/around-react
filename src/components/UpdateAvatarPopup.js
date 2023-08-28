import React from "react";
import PopupWithForm from "./PopupWithForm";

function UpdateAvatarPopup(props) {
  const { isOpen, onClose } = props;
  return (
    <PopupWithForm
      name='updateavatar'
      title='Change profile picture'
      buttonText='Save'
      isOpen={isOpen}
      onClose={onClose}
    >
      <fieldset className='form__fieldset'>
        <input
          type='url'
          className='form__input'
          id='updateavatar__image-link'
          name='image-link'
          placeholder='Image link'
          required
        />
        <span className='form__input-title-error form__error'>no errors</span>
      </fieldset>
    </PopupWithForm>
  );
}

export default UpdateAvatarPopup;
