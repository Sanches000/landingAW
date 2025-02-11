import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #073e7c ;
  color: white;
  width: 100vw;
  padding: 20px;
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

function Advantages() {
    return (
        <Container>
            <h2>Diferenciais</h2>
            <IconContainer>
                <IconWrapper>
                    <img src="icon1.png" alt="Desenvolvemos os artefatos de borracha sob medida" className="img-fluid" />
                    <p>Desenvolvemos os artefatos de borracha sob medida, em conjunto com o departamento de engenharia do cliente, para que os produtos atinjam as suas especificações de funcionalidade, produtividade e custo.</p>
                </IconWrapper>
                <IconWrapper>
                    <img src="icon2.png" alt="Formulamos e produzimos a borracha internamente" className="img-fluid" />
                    <p>Formulamos e produzimos a borracha internamente, garantindo a qualidade da matéria prima e assegurando que o cliente receba exatamente o material que pediu, com as características que necessita.</p>
                </IconWrapper>
                <IconWrapper>
                    <img src="icon3.png" alt="Estamos localizados em Curitiba" className="img-fluid" />
                    <p>Estamos localizados em Curitiba, contando com facilidade logística e experiência de fornecimento para todo o território nacional e América Latina.</p>
                </IconWrapper>
                <IconWrapper>
                    <img src="icon4.png" alt="Contamos com diferentes métodos de produção" className="img-fluid" />
                    <p>Contamos com diferentes métodos de produção, podendo fornecer toda quantidade de produtos - de poucas unidades a milhões de peças ao mês -, destacando-nos na injeção de produtos de borracha e silicone, bem como na fabricação de perfis e mangueiras dos mesmos materiais.</p>
                </IconWrapper>
            </IconContainer>
        </Container>
    );
};

export default Advantages;