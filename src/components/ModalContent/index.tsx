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
      <h1>Cadastre seu novo pet</h1>
      <div className="content">
        <input name="name" type="text" placeholder="Nome" />
        <input name="age" type="number" placeholder="Idade" min="1" />
        <textarea name="description" placeholder="Descrição" />
      </div>
      <div className="buttons">
        <button type="button" className="confirm">
          Cadastrar
        </button>
        <button type="button" className="cancel" onClick={onClick}>
          Cancelar
        </button>
      </div>
    </Modal>
  );
};

export default ModalContent;
