import React from 'react';
import { useModal } from './Modal';

function OpenModalButton({
  modalComponent, // component to render inside the modal
  buttonText, // text of the button that opens the modal
  onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose, // optional: callback function that will be called once the modal is closed
  customizeStyle,
  buttonTag,
  modalCss,
  modalContentCss,
  modalBackgroundCss
}) {
  const { setModalContent, setOnModalClose, setModalCss, setModalContentCss, setModalBackgroundCss } = useModal();


  const onClick = () => {
    if (onModalClose) setOnModalClose(onModalClose);
    setModalContent(modalComponent);
    if (onButtonClick) onButtonClick();
    setModalCss(modalCss);
    setModalContentCss(modalContentCss);
    setModalBackgroundCss(modalBackgroundCss);
  };

  if (buttonTag === "span") {
    return (
      <span onClick={onClick} className={customizeStyle}>{buttonText}</span>
    )
  }
  return (
    <button onClick={onClick} className={customizeStyle}>{buttonText}</button>
  );
}

export default OpenModalButton;
