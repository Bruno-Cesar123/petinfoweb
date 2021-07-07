import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { toast } from 'react-toastify';
import singin from '../../assets/images/singin.svg';

import { Container, Content, AnimationContainer, Background } from './styles';
import api from '../../services/api';

interface SignUInFormData {
  email: string;
  password: string;
}

const schema = Yup.object().shape({
  email: Yup.string()
    .required('* E-mail obrigatório')
    .email('* Digite um e-mail válido'),
  password: Yup.string().min(6, '* No mínimo 6 dígitos'),
});

const SignIn: React.FC = () => {
  const history = useHistory();
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={schema}
            onSubmit={async (data: SignUInFormData) => {
              try {
                await api.post('/sessions', data);

                history.push('/dashboard');
                toast.success('Login realizado com sucesso');
              } catch (err) {
                toast.error('Não foi possível fazer o login');
              }
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <h2>Faça seu login</h2>

                <Field
                  name="email"
                  type="email"
                  placeholder="Digite seu email"
                  className={errors.email && touched.email ? 'input-error' : ''}
                />
                {errors.email && touched.email ? <p>{errors.email}</p> : null}
                <Field
                  name="password"
                  type="password"
                  placeholder="Digite seu password"
                  className={
                    errors.password && touched.password ? 'input-error' : ''
                  }
                />
                {errors.password && touched.password ? (
                  <p>{errors.password}</p>
                ) : null}

                <button type="submit">ENTRAR</button>

                <Link to="forgot-password">Esqueci minha senha</Link>
              </Form>
            )}
          </Formik>
          <Link to="/signup">
            <FiLogIn />
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>
      <Background>
        <img src={singin} alt="imagem signin" />
      </Background>
    </Container>
  );
};

export default SignIn;
