import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { PiGearSixDuotone, PiStarDuotone, PiFactoryDuotone  } from "react-icons/pi";

const Container = styled.div`
  background-color: #073e7c ;
  color: white;
  width: 100vw;
  padding: 20px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0; // Remove margens padrão
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px; // Define uma largura máxima para o conteúdo
  margin: 0 auto; // Centraliza o conteúdo
  margin-top: 25px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const IconWrapper = styled.div`
  text-align: center;
  margin: 10px;
  flex: 1;
`;

const Icone = styled.a`
  transform: scale(3); /* Aumenta a escala do ícone em 1.5 vezes */
  display: flex; /* Garante que o ícone seja dimensionado corretamente */
  justify-content: center; /* Centraliza o ícone horizontalmente */
  align-items: center; /* Centraliza o ícone verticalmente */
  margin-bottom: 25px;
  margin-top: 25px;
  color: white;
`
const Paragrafo = styled.p`
  margin: 0; /* Remove a margem entre os parágrafos */
  line-height: 1.5; /* Ajusta a altura da linha */
`

function Advantages() {
  return (
    <Container>
      <h2>Vantagens</h2>
      <IconContainer>
        <IconWrapper>
          <Icone><PiGearSixDuotone /></Icone>
          <Paragrafo>Produzimos artefatos de borracha personalizados para garantir que os produtos atendam perfeitamente às suas especificações de funcionalidade, eficiência e custo.</Paragrafo>
        </IconWrapper>
        <IconWrapper>
          <Icone><PiStarDuotone /></Icone>
          <Paragrafo>Realizamos a formulação e produção interna da borracha, assegurando a qualidade da matéria-prima com as especificações necessárias, garantindo a qualidade exigida por nossos clientes.</Paragrafo>
        </IconWrapper>
        <IconWrapper>
          <Icone><PiFactoryDuotone  /></Icone>
          <Paragrafo>Utilizamos diversos métodos de produção para fornecer desde poucas unidades até milhões de peças, especializados em injeção de borracha e silicone.</Paragrafo>
        </IconWrapper>
      </IconContainer>
    </Container>
  );
};

export default Advantages;