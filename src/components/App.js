import { useState } from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import AddPlaceFormPopup from "./AddPlaceFormPopup";
import EditProfilePopup from "./EditProfilePopup";
import UpdateAvatarPopup from "./UpdateAvatarPopup";
import ConfirmPopup from "./ConfirmPopup";
import ImagePopup from "./ImagePopup";

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

  // const [isCardPopupOpen, setCardPopupOpen] = useState(false);
  // const handleCardPopupClick = () => {
  //   setCardPopupOpen(!isCardPopupOpen);
  // };

  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setUpdateAvatarPopupOpen(false);
    setConfirmPopupOpen(false);
    // setCardPopupOpen(false);
    setSelectedCard(false);
  };

  const [selectedCard, setSelectedCard] = useState(false);
  const handleCardClick = (selectedCard) => {
    setSelectedCard(selectedCard);
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

        {selectedCard && (
          <ImagePopup selectedCard={selectedCard} onClose={closeAllPopups} />
        )}
      </section>

      <div className='page'>
        <Header />

        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlacePopupClick}
          onEditAvatarClick={handleUpdateAvatarPopupClick}
          onCardClick={handleCardClick}
          onConfirmClick={handleConfirmPopupClick}
        />

        <Footer />
      </div>
    </>
  );
}

export default App;
