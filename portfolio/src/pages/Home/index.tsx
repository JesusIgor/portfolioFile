import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #333;
`;

const Description = styled.p`
  font-size: 18px;
  color: #666;
`;

const HomePage: React.FC = () => (
  <Container>
    <Title>Bem-vindo ao Meu Portfólio</Title>
    <Description>Este é um exemplo de uma homepage estilizada com styled-components dentro do diretório pages/Home.</Description>
  </Container>
);

export default HomePage;