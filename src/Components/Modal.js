const Modal = ({ showModal, onClose, content }) => {
    return (
      <>
        {showModal && (
          <>
            <div className="modal-backdrop" onClick={onClose}></div>
            <div className="modal-container">
              <div className="modal-content">{content}</div>
            </div>
          </>
        )}
      </>
    );
  };
  
  export default Modal;
  