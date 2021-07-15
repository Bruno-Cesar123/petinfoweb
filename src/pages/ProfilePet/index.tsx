import React, { useCallback, ChangeEvent, useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { FiArrowLeft, FiCamera } from 'react-icons/fi';
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
  id: string;
  name: string;
  description: string;
  age: number;
  avatar_url: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  age: Yup.number().required('Idade obrigatória'),
  description: Yup.string(),
});

const ProfilePet: React.FC = () => {
  const [pet, setPet] = useState<Pet>();
  const params = useParams<PetParams>();
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

  console.log(pet);

  return (
    <Container>
      <header>
        <div>
          <Link to="/dashboard">
            <FiArrowLeft />
          </Link>
        </div>
      </header>
      <Content>
        <Formik
          initialValues={{
            name: '',
            age: 0,
            description: '',
          }}
          validationSchema={schema}
          onSubmit={useCallback(
            async (data: ProfileFormData) => {
              try {
                await api.put(`/pets/${params.id}`, data);

                history.push('/dashboard');
                toast.success('Pet alterado com sucesso');
              } catch (err) {
                toast.error(
                  'Não foi possivel alterar seu conta, tente novamente'
                );
              }
            },
            [history, params.id]
          )}
        >
          {({ errors, touched }) => (
            <Form>
              <AvatarInput>
                <img src={pet?.avatar_url} alt={pet?.name} />
                <label htmlFor="avatar">
                  <FiCamera />

                  <input
                    type="file"
                    id="avatar"
                    onChange={handleAvatarChange}
                  />
                </label>
              </AvatarInput>
              <h2>Meu perfil</h2>

              <p>{pet?.name}</p>

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
                textarea
                name="description"
                placeholder="Descrição"
              />

              <button type="submit">Confirmar mudanças</button>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default ProfilePet;
