import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  const { isOpen, onClose } = props;
  return (
    <PopupWithForm
      name='profile'
      title='Edit profile'
      buttonText='Save'
      isOpen={isOpen}
      onClose={onClose}
    >
      <fieldset className='form__fieldset'>
        <input
          type='text'
          className='form__input'
          id='profileform__name'
          name='name'
          placeholder='Name'
          required
          minLength={2}
          maxLength={40}
        />
        <span className='form__input-name-error form__error'>no errors</span>
        <input
          type='text'
          className='form__input'
          id='profileform__about-me'
          name='about-me'
          placeholder='About me'
          required
          minLength={2}
          maxLength={200}
        />
        <span className='form__input-about-me-error form__error'>
          no errors
        </span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
