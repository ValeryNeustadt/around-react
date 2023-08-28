import React, { useEffect, useState } from "react";
import Api from "../utils/Api";
import Card from "./Card";

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
  token: "02d6028b-ac6a-4274-af91-85096bd7453f",
});

function Main(props) {
  const {
    onEditProfileClick,
    onAddPlaceClick,
    onEditAvatarClick,
    onCardClick,
    onConfirmClick,
  } = props;

  const [userName, setUserName] = useState(null);
  const [userDescription, setUserDescription] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserData()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch(console.error);
  }, []);

  return (
    <main className='content'>
      <section className='profile'>
        <div onClick={onEditAvatarClick} className='profile__avatar'>
          <div
            // src={userAvatar}
            style={{ backgroundImage: `url(${userAvatar})` }}
            // alt=' '
            className='profile__avatar-image'
          ></div>
        </div>

        <div className='profile__info' id=''>
          <h1 className='profile__name-title'>
            <span className='profile__name'>{userName}</span>
            <button
              onClick={onEditProfileClick}
              className='profile__edit-button'
              type='button'
              aria-label='edit button'
            ></button>
          </h1>
          <p className='profile__profession'>{userDescription}</p>
        </div>

        <button
          onClick={onAddPlaceClick}
          className='profile__add-button'
          type='button'
          aria-label='add button'
        ></button>
      </section>
      <section className='gallery'>
        <div className='gallery__elements'>
          {cards.map((card) => (
            <Card
              onCardClick={onCardClick}
              card={card}
              key={`${card._id}`}
              onConfirmClick={onConfirmClick}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
