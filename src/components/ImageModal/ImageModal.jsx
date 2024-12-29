import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onClose, image }) {
  if (!image) return null;

  const { urls, alt_description } = image;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.8)" },
        content: {
          maxWidth: "1200px",
          height: "800px",
          margin: "auto",
          borderRadius: "10px",
          padding: "0",
          overflow: "hidden",
        },
      }}
    >
      <img src={urls.regular} alt={alt_description} className={css.modalImg} />
    </Modal>
  );
};