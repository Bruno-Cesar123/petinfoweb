import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { toast } from 'react-toastify';
import singup from '../../assets/images/singup.svg';

import { Container, Content, AnimationContainer, Background } from './styles';
import api from '../../services/api';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('* Nome obrigatório'),
  email: Yup.string()
    .required('* E-mail obrigatório')
    .email('* Digite um e-mail válido'),
  password: Yup.string().min(6, '* No mínimo 6 dígitos'),
});

const SignUp: React.FC = () => {
  const history = useHistory();
  return (
    <Container>
      <Background>
        <img src={singup} alt="imagem singin" />
      </Background>
      <Content>
        <AnimationContainer>
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
            }}
            validationSchema={schema}
            onSubmit={async (data: SignUpFormData) => {
              try {
                await api.post('/users', data);

                history.push('/signin');
                toast.success('Sua conta foi criada com sucesso');
              } catch (err) {
                toast.error('Não foi possivel criar sua conta');
              }
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <h2>Cadastre-se</h2>

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

                <button type="submit">CADASTRAR</button>
              </Form>
            )}
          </Formik>
          <Link to="/signin">
            <FiArrowLeft />
            Voltar para logon
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
