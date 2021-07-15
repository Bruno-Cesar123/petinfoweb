import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiChevronRight } from 'react-icons/fi';
import ModalContent from '../../components/ModalContent';
import { Container, Header, Profile, HeaderContent, Content } from './styles';
import { useAuth } from '../../hooks/AuthContext';
import api from '../../services/api';

interface Pet {
  id: string;
  name: string;
  age: number;
  avatar_url: string;
}

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
          <button onClick={() => setOpenModal(true)} type="button">
            Cadastrar Pet
          </button>
        </div>

        <ModalContent
          isOpen={openModal}
          onRequestClose={() => setOpenModal(false)}
          onClick={() => setOpenModal(false)}
        />

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
