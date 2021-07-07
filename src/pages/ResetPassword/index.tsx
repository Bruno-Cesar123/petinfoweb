import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import resetPassword from '../../assets/images/reset-password.svg';

import { AnimationContainer, Container, Content, Background } from './styles';
import api from '../../services/api';

interface ResetPasswordFormData {
  password: string;
  password_confirmation: string;
}

const schema = Yup.object().shape({
  password: Yup.string()
    .required('* Senha obrigatória')
    .min(6, '* No mínimo 6 dígitos'),
  password_confirmation: Yup.string().oneOf(
    [Yup.ref('password'), undefined],
    'Confirmação incorreta'
  ),
});

const ResetPassword: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <Container>
      <Background>
        <img src={resetPassword} alt="imagem recuperação de senha" />
      </Background>
      <Content>
        <AnimationContainer>
          <Formik
            initialValues={{
              password: '',
              password_confirmation: '',
            }}
            validationSchema={schema}
            onSubmit={async (data: ResetPasswordFormData) => {
              try {
                const { password, password_confirmation } = data;
                const token = location.search.replace('?token=', '');

                if (!token) {
                  throw new Error();
                }

                console.log(token);

                await api.post('/password/reset', {
                  password,
                  password_confirmation,
                  token,
                });

                toast.success('Senha alterada com sucesso');

                history.push('/signin');
              } catch (err) {
                toast.error(
                  'Não foi possível alterar a senha, tente novamente.'
                );
              }
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <h1>Resetar senha</h1>

                <Field
                  name="password"
                  type="password"
                  placeholder="Digite sua senha"
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
                  placeholder="Digite sua senha"
                  className={
                    errors.password_confirmation &&
                    touched.password_confirmation
                      ? 'input-error'
                      : ''
                  }
                />
                {errors.password_confirmation &&
                touched.password_confirmation ? (
                  <p>{errors.password_confirmation}</p>
                ) : null}

                <button type="submit">Alterar senha</button>
              </Form>
            )}
          </Formik>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default ResetPassword;
