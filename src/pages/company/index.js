import styled from 'styled-components'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color:rgb(236, 236, 236);
    overflow-x: hidden;
`
const Paragraph = styled.p`
  font-family: 'Inter', sans-serif;  
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 15px;
  width: 100%; /* Ajuste para usar 100% da largura dentro da coluna do Bootstrap */
`;


function Company() {
    return (
        <AppContainer>
            <Paragraph>
                Fundada em 21 de janeiro de 2005, a Almeida & Werneck se destaca no mercado 
                como uma Indústria de Artefatos de Borracha, Silicone e Poliuretano, além da
                Prestação de Serviços. Especializamos-nos em trabalhar com diversos tipos de 
                borracha, oferecendo aos nossos clientes um sistema ágil e eficiente que atende 
                às mais variadas necessidades.
            </Paragraph>
            <Paragraph>
                Para assegurar a excelência em nossos serviços, contamos com uma equipe de 
                colaboradores altamente capacitados e com vasta experiência no setor. 
                Estamos preparados para suprir as necessidades de empresas de todos os tamanhos.
            </Paragraph>
        </AppContainer>
    );
  }
  
  export default Company;