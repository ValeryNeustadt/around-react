import React, { useState } from 'react';
import avatar from '../images/jacques-cousteau-avatar.png';
import EditProfilePopup from './EditProfilePopup';

function Main(props) {
  const {
    onEditProfileClick,
    onAddPlaceClick,
    onEditAvatarClick,
    onCardClick,
  } = props;

  return (
    <main className='content'>
      <section className='profile'>
        <div onClick={onEditAvatarClick} className='profile__avatar'>
          <img src={avatar} alt=' ' className='profile__avatar-image' />
        </div>

        <div className='profile__info' id=''>
          <h1 className='profile__name-title'>
            <span className='profile__name'>Cousto</span>
            <button
              onClick={onEditProfileClick}
              className='profile__edit-button'
              type='button'
              aria-label='edit button'
            ></button>
          </h1>
          <p className='profile__profession'>Travel</p>
        </div>

        <button
          onClick={onAddPlaceClick}
          className='profile__add-button'
          type='button'
          aria-label='add button'
        ></button>
      </section>
      <section className='gallery'>
        <div className='gallery__elements'></div>
      </section>
    </main>
  );
}

export default Main;
