import React from 'react';
import PopupWithForm from './PopupWithForm';

function ConfirmPopup(props) {
  const { isOpen, onClose } = props;
  return (
    <PopupWithForm
      name='confirm'
      title='Are you sure?'
      buttonText='Yes'
      isOpen={isOpen}
      onClose={onClose}
    ></PopupWithForm>
  );
}

export default ConfirmPopup;
