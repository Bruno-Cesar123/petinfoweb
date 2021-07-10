import React, { useCallback, ChangeEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { FiArrowLeft, FiCamera } from 'react-icons/fi';
import api from '../../services/api';

import { Container, Content, AvatarInput } from './styles';
import { useAuth } from '../../hooks/AuthContext';

interface ProfileFormData {
  name: string;
  email: string;
  old_password: string;
  password: string;
  password_confirmation: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string()
    .required('E-mail obrigatório')
    .email('Digite um e-mail válido'),
  old_password: Yup.string(),
  password: Yup.string().when('old_password', {
    is: (value) => value && value.length > 0,
    then: Yup.string().required('Campo obrigatório'),
    otherwise: Yup.string(),
  }),
  password_confirmation: Yup.string()
    .when('old_password', {
      is: (value) => value && value.length > 0,
      then: Yup.string().required('Campo obrigatório'),
      otherwise: Yup.string(),
    })
    .oneOf([Yup.ref('password'), undefined], 'Confirmação incorreta'),
});

const ProfileUser: React.FC = () => {
  const history = useHistory();
  const { user, updateUser } = useAuth();

  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append('avatar', e.target.files[0]);

        api.patch('/users/avatar', data).then((response) => {
          updateUser(response.data);

          toast.success('Avatar atualizado com sucesso');
        });
      }
    },
    [updateUser]
  );

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
            name: user.name,
            email: user.email,
            old_password: '',
            password: '',
            password_confirmation: '',
          }}
          validationSchema={schema}
          onSubmit={useCallback(
            async (data: ProfileFormData) => {
              try {
                const {
                  name,
                  email,
                  old_password,
                  password,
                  password_confirmation,
                } = data;

                const formData = {
                  name,
                  email,
                  ...(old_password
                    ? {
                        old_password,
                        password,
                        password_confirmation,
                      }
                    : {}),
                };

                const response = await api.put('/profile', formData);

                updateUser(response.data);

                history.push('/dashboard');
                toast.success('Sua conta foi alterada com sucesso');
              } catch (err) {
                toast.error(
                  'Não foi possivel alterar sua conta, tente novamente'
                );
              }
            },
            [updateUser, history]
          )}
        >
          {({ errors, touched }) => (
            <Form>
              <AvatarInput>
                <img src={user.avatar_url} alt={user.name} />
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

              <Field
                name="name"
                type="text"
                placeholder="Digite seu nome"
                className={errors.name && touched.name ? 'input-error' : ''}
              />
              {errors.name && touched.name ? <p>{errors.name}</p> : null}
              <Field
                name="email"
                type="email"
                placeholder="Digite seu email"
                className={errors.email && touched.email ? 'input-error' : ''}
              />
              {errors.email && touched.email ? <p>{errors.email}</p> : null}

              <Field
                name="old_password"
                type="password"
                placeholder="Digite sua senha atual"
              />

              <Field
                name="password"
                type="password"
                placeholder="Digite sua nova senha"
                className={
                  errors.password && touched.password ? 'input-error' : ''
                }
              />
              {errors.password && touched.password ? (
                <p>{errors.password}</p>
              ) : null}

              <Field
                name="password_confirmation"
                type="password"
                placeholder="Confirme sua nova senha"
                className={
                  errors.password_confirmation && touched.password_confirmation
                    ? 'input-error'
                    : ''
                }
              />
              {errors.password_confirmation && touched.password_confirmation ? (
                <p>{errors.password_confirmation}</p>
              ) : null}

              <button type="submit">Confirmar mudanças</button>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default ProfileUser;
