import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiChevronRight } from 'react-icons/fi';

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
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    api.get<Pet[]>('/pets').then((response) => {
      setPets(response.data);
    });
  }, []);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <h2>PETINFO</h2>

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
        <h1>Seus Pets</h1>

        <div>
          {pets.map((pet) => {
            return (
              <Link key={pet.age} to={`/pets/${pet.id}`}>
                <img src={pet.avatar_url} alt={pet.name} />
                <div>
                  <strong>{pet.name}</strong>
                  <p>Idade: {pet.age} anos.</p>
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
