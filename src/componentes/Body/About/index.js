import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const BodyContainer = styled(Container)`
  width: 100vw;
  height: 50%;
  background-color: rgb(84, 85, 87);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 20px;
`;

const Paragraph = styled.p`
  font-family: 'Inter', sans-serif;  
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 15px;
  width: 100%; /* Ajuste para usar 100% da largura dentro da coluna do Bootstrap */
`;

function About() {
  return (
    <BodyContainer fluid>
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <Paragraph>Fundada em 21 de janeiro de 2005, a Almeida & Werneck se destaca no mercado como uma Indústria de Artefatos de Borracha, Silicone e Poliuretano, além da Prestação de Serviços. Especializamos-nos em trabalhar com diversos tipos de borracha, oferecendo aos nossos clientes um sistema ágil e eficiente que atende às mais variadas necessidades.</Paragraph>
          <Paragraph>Para assegurar a excelência em nossos serviços, contamos com uma equipe de colaboradores altamente capacitados e com vasta experiência no setor. Estamos preparados para suprir as necessidades de empresas de todos os tamanhos—pequenas, médias e grandes—e nos orgulhamos de nossa capacidade de adaptação e inovação constante.</Paragraph>
        </Col>
      </Row>
    </BodyContainer>
  );
}

export default About;
