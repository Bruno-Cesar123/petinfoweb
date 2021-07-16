import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { FiPower, FiChevronRight } from 'react-icons/fi';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import ModalContent from '../../components/ModalContent';
import { Container, Header, Profile, HeaderContent, Content } from './styles';
import { useAuth } from '../../hooks/AuthContext';
import api from '../../services/api';

interface Pet {
  id: string;
  name: string;
  pet_id: string;
  description: string;
  age: number;
  avatar_url: string;
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

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    api.get<Pet[]>('/pets').then((response) => {
      const newPets = response.data;
      setPets(newPets);
    });
  }, []);

  function handleOpenModal(): void {
    setOpenModal(false);
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <h2>INFOPETS</h2>

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-vindo,</span>
              <Link to="/profile-user">
                <strong>{user.name}</strong>
              </Link>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <div className="title">
          <h1>Seus Pets</h1>
          <button type="button" onClick={() => setOpenModal(true)}>
            Cadastrar Pet
          </button>
        </div>

        <ModalContent isOpen={openModal} onRequestClose={handleOpenModal}>
          <Formik
            initialValues={{
              name: '',
              age: 0,
              pet_id: user.id,
              description: '',
            }}
            validationSchema={schema}
            onSubmit={async (dataForm: CreatePetFormData) => {
              try {
                const { data } = await api.post('/pets', dataForm);

                setPets([...pets, data]);

                setOpenModal(false);

                toast.success('Seu Pet foi sucesso');
              } catch (err) {
                toast.error('Não foi possivel criar seu novo pet');
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
                    name="description"
                    placeholder="Descrição"
                  />
                </div>
                <div className="buttons">
                  <button type="submit" className="confirm">
                    Cadastrar
                  </button>
                  <button
                    type="button"
                    className="cancel"
                    onClick={handleOpenModal}
                  >
                    Cancelar
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </ModalContent>

        <div className="list-pets">
          {pets.map((pet) => {
            return (
              <Link key={pet.id} to={`/pet-info/${pet.id}`}>
                <img
                  src={
                    pet.avatar_url
                      ? pet.avatar_url
                      : 'http://placehold.it/300x300'
                  }
                  alt={pet.name}
                />
                <div>
                  <strong>{pet.name}</strong>
                  <p>
                    Idade: {pet.age} {pet.age < 2 ? 'ano' : 'anos'}
                  </p>
                </div>

                <FiChevronRight size={20} />
              </Link>
            );
          })}
        </div>
      </Content>
    </Container>
  );
};

export default Dashboard;
