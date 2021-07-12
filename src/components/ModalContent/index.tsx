import React from 'react';
import Modal from 'react-modal';

import './styles.scss';

Modal.setAppElement('#root');

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onClick: () => void;
}

const ModalContent: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  onClick,
}: ModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="overlay"
      closeTimeoutMS={500}
    >
      <h1>Deseja deletar a pergunta?</h1>
      <div className="buttons">
        <button type="button" className="confirm">
          Confirmar
        </button>
        <button type="button" className="cancel" onClick={onClick}>
          Cancelar
        </button>
      </div>
    </Modal>
  );
};

export default ModalContent;
