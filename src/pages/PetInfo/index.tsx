import React, { useCallback, useState, ChangeEvent, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiCamera } from 'react-icons/fi';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import api from '../../services/api';

import { Container, Content, AvatarInput } from './styles';

interface ProfileFormData {
  name: string;
  age: number;
  description: string;
}

interface PetParams {
  id: string;
}

interface Pet {
  name: string;
  description: string;
  age: number;
  avatar_url: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('* Nome obrigatório'),
  age: Yup.number().required('* Idade obrigatória'),
  description: Yup.string(),
});

const PetInfo: React.FC = () => {
  const params = useParams<PetParams>();
  const [pet, setPet] = useState<Pet>();
  const history = useHistory();

  useEffect(() => {
    api.get(`/pets/${params.id}`).then((response) => {
      setPet(response.data);
    });
  }, [params.id]);

  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append('avatar', e.target.files[0]);

        api.patch(`/pets/avatar/${params.id}`, data).then((response) => {
          setPet(response.data);

          toast.success('Avatar atualizado com sucesso');
        });
      }
    },
    [params.id]
  );

  const updatePet = useCallback(
    async (data: ProfileFormData) => {
      try {
        await api.put(`/pets/${params.id}`, data);

        history.push('/dashboard');
        toast.success('Pet alterado com sucesso');
      } catch (err) {
        toast.error('Não foi possivel alterar seu conta, tente novamente');
      }
    },
    [history, params.id]
  );

  const handleDeletePet = useCallback(async () => {
    try {
      await api.delete(`/pets/${params.id}`);

      history.push('/dashboard');
      toast.success('Pet deletado com sucesso');
    } catch (err) {
      toast.error('Não foi possivel deletar o pet');
    }
  }, [history, params.id]);

  return (
    <Container>
      <header>
        <div>
          <Link to="/dashboard">
            <FiArrowLeft />
          </Link>
        </div>
      </header>

      {pet && (
        <Formik
          initialValues={{
            name: pet.name,
            age: pet.age,
            description: pet.description,
          }}
          validationSchema={schema}
          onSubmit={updatePet}
        >
          {({ errors, touched }) => (
            <Content>
              <AvatarInput>
                <img
                  src={
                    pet.avatar_url
                      ? pet.avatar_url
                      : 'http://placehold.it/300x300'
                  }
                  alt={pet.name}
                />
                <label htmlFor="avatar">
                  <FiCamera />

                  <input
                    type="file"
                    id="avatar"
                    onChange={handleAvatarChange}
                  />
                </label>
              </AvatarInput>
              <Form>
                <h2>Informações do Pet</h2>

                <Field
                  name="name"
                  type="text"
                  placeholder="Digite seu nome"
                  className={errors.name && touched.name ? 'input-error' : ''}
                />
                {errors.name && touched.name ? <p>{errors.name}</p> : null}
                <Field
                  name="age"
                  type="number"
                  placeholder="Digite a idade"
                  className={errors.age && touched.age ? 'input-error' : ''}
                  min="1"
                />
                {errors.age && touched.age ? <p>{errors.age}</p> : null}

                <Field
                  as="textarea"
                  name="description"
                  placeholder="Descrição"
                />

                <div className="buttons">
                  <button type="submit" className="confirm">
                    Alterar dados
                  </button>
                  <button
                    type="button"
                    className="exclude"
                    onClick={handleDeletePet}
                  >
                    Excluir Pet
                  </button>
                </div>
              </Form>
            </Content>
          )}
        </Formik>
      )}
    </Container>
  );
};

export default PetInfo;
