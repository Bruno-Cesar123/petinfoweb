import React, { ReactNode } from 'react';
import Modal from 'react-modal';

import './styles.scss';

Modal.setAppElement('#root');

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: ReactNode;
}

const ModalContent: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  children,
}: ModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="overlay"
      closeTimeoutMS={500}
    >
      {children}
    </Modal>
  );
};

export default ModalContent;
