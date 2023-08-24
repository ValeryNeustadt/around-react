import { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import AddPlaceFormPopup from './components/AddPlaceFormPopup';
import EditProfilePopup from './components/EditProfilePopup';
import UpdateAvatarPopup from './components/UpdateAvatarPopup';
import ConfirmPopup from './components/ConfirmPopup';
import ImagePopup from './components/ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const handleAddPlacePopupClick = () => {
    setAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  const [isUpdateAvatarPopupOpen, setUpdateAvatarPopupOpen] = useState(false);
  const handleUpdateAvatarPopupClick = () => {
    setUpdateAvatarPopupOpen(!isUpdateAvatarPopupOpen);
  };

  const [isConfirmPopupOpen, setConfirmPopupOpen] = useState(false);
  const handleConfirmPopupClick = () => {
    setConfirmPopupOpen(!isConfirmPopupOpen);
  };

  const [isCardPopupOpen, setCardPopupOpen] = useState(false);
  const handleCardPopupClick = () => {
    setCardPopupOpen(!isCardPopupOpen);
  };

  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setUpdateAvatarPopupOpen(false);
    setConfirmPopupOpen(false);
    setCardPopupOpen(false);
  };

  return (
    <>
      <section className='popups'>
        {isEditProfilePopupOpen && (
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
          />
        )}

        {isAddPlacePopupOpen && (
          <AddPlaceFormPopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          />
        )}

        {isUpdateAvatarPopupOpen && (
          <UpdateAvatarPopup
            isOpen={isUpdateAvatarPopupOpen}
            onClose={closeAllPopups}
          />
        )}

        {isConfirmPopupOpen && (
          <ConfirmPopup isOpen={isConfirmPopupOpen} onClose={closeAllPopups} />
        )}

        {isCardPopupOpen && (
          <ImagePopup isOpen={isCardPopupOpen} onClose={closeAllPopups} />
        )}

      </section>

      <div className='page'>
        
        <Header />

        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlacePopupClick}
          onEditAvatarClick={handleUpdateAvatarPopupClick}
          onCardClick={handleCardPopupClick}
        />

        <Footer />

      </div>
      <template id='gallery'>
        <div className='element' id=''>
          <button
            className='element__trash-button'
            type='button'
            aria-label='trash-button'
          ></button>
          <img src='url' alt='alt_img_gallery' className='element__photo' />
          <div className='element__header'>
            <h2 id='id_element__header' className='element__text'></h2>
            <div className='element__button-like-section'>
              <button
                className='element__button-like'
                type='button'
                aria-label='like button'
              ></button>
              <p className='element__number-like'></p>
            </div>
          </div>
        </div>
      </template>
    </>
  );
}

export default App;
