import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { toast } from 'react-toastify';
import { FiArrowLeft } from 'react-icons/fi';
import { AnimationContainer, Container, Content, Background } from './styles';
import api from '../../services/api';

import forgotPassword from '../../assets/images/forgot-password.svg';

interface ForgotPasswordFormData {
  email: string;
}

const schema = Yup.object().shape({
  email: Yup.string()
    .required('* E-mail obrigatório')
    .email('* Digite um e-mail válido'),
});

const ForgotPassword: React.FC = () => {
  const history = useHistory();
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Formik
            initialValues={{
              email: '',
            }}
            validationSchema={schema}
            onSubmit={async (data: ForgotPasswordFormData) => {
              try {
                await api.post('/password/forgot', {
                  email: data.email,
                });

                toast.success(
                  'Enviamos um e-mail para recuperação de senha, cheque sua caixa de entrada'
                );
              } catch (err) {
                toast.error(
                  'Não foi possível enviar o pedido de recuperação de senha!.'
                );
              }
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <h2>Recuperar senha</h2>

                <Field
                  name="email"
                  type="email"
                  placeholder="Digite seu email"
                  className={errors.email && touched.email ? 'input-error' : ''}
                />
                {errors.email && touched.email ? <p>{errors.email}</p> : null}

                <button type="submit">ENTRAR</button>

                <Link to="/signin">
                  <FiArrowLeft /> Voltar ao login
                </Link>
              </Form>
            )}
          </Formik>
        </AnimationContainer>
      </Content>
      <Background>
        <img src={forgotPassword} alt="imagem esqueceu a senha" />
      </Background>
    </Container>
  );
};

export default ForgotPassword;
