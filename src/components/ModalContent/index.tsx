import React from 'react';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import './styles.scss';
import { toast } from 'react-toastify';
import { useAuth } from '../../hooks/AuthContext';
import api from '../../services/api';

Modal.setAppElement('#root');

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onClick: () => void;
}

interface CreatePetFormData {
  name: string;
  age: number;
  pet_id: string;
  description: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('* Nome obrigatório'),
  age: Yup.number().required('* Idade obrigatória'),
  pet_id: Yup.string().required(),
  description: Yup.string(),
});

const ModalContent: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  onClick,
}: ModalProps) => {
  const { user } = useAuth();
  const history = useHistory();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="overlay"
      closeTimeoutMS={500}
    >
      <Formik
        initialValues={{
          name: '',
          age: 1,
          pet_id: user.id,
          description: '',
        }}
        validationSchema={schema}
        onSubmit={async (data: CreatePetFormData) => {
          try {
            await api.post('/pets', data);

            history.push('/dashboard');
            toast.success('Seu Pet foi sucesso');
          } catch (err) {
            toast.error('Não foi possivel criar sua conta');
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <h1>Cadastre seu novo pet</h1>
            <div className="content">
              <Field
                name="name"
                type="text"
                placeholder="Nome"
                className={errors.name && touched.name ? 'input-error' : ''}
              />
              {errors.name && touched.name ? <p>{errors.name}</p> : null}
              <Field
                name="age"
                type="number"
                placeholder="Idade"
                min="1"
                className={errors.age && touched.age ? 'input-error' : ''}
              />
              {errors.age && touched.age ? <p>{errors.age}</p> : null}
              <Field
                as="textarea"
                textarea
                name="description"
                placeholder="Descrição"
              />
            </div>
            <div className="buttons">
              <button type="submit" className="confirm">
                Cadastrar
              </button>
              <button type="button" className="cancel" onClick={onClick}>
                Cancelar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default ModalContent;
