import styled from 'styled-components';
import { GiFactory } from "react-icons/gi";

const AppContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: rgb(236, 236, 236);
    overflow-x: hidden; /* Impede a rolagem horizontal */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    box-sizing: border-box; /* Garante que o padding não aumente a largura total */
    position: relative; /* Permite posicionar elementos corretamente */
`;

const Content = styled.div`
    flex: 1; /* Faz com que o conteúdo ocupe o espaço disponível */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 800px;
    box-sizing: border-box; /* Garante que o padding não aumente a largura */
`;

const Paragraph = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    width: 100%;
    box-sizing: border-box; /* Garante que o padding não aumente a largura */
`;

const Icone = styled.div`
    transform: scale(9);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    margin-top: 100px;
    color: black;

    @media (max-width: 768px) {
        transform: scale(5);
        margin-top: 50px;
        margin-bottom: 30px;
    }
`;

const Text = styled.div`
    width: 100%;
    font-family: 'Inter', sans-serif;  
    font-size: 18px;
    text-align: justify;
    padding: 0 20px;
    box-sizing: border-box; /* Garante que o padding não aumente a largura */

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

function Company() {
    return (
        <AppContainer>
            <Content>
                <Icone><GiFactory /></Icone>
                <Paragraph>
                    <Text>
                        Fundada em 21 de janeiro de 2005, a Almeida & Werneck se destaca no mercado
                        como uma Indústria de Artefatos de Borracha, Silicone e Poliuretano, além da
                        Prestação de Serviços. Especializamos-nos em trabalhar com diversos tipos de
                        borracha, oferecendo aos nossos clientes um sistema ágil e eficiente que atende
                        às mais variadas necessidades.
                    </Text>
                </Paragraph>
                <Paragraph>
                    <Text>
                        Para assegurar a excelência em nossos serviços, contamos com uma equipe de
                        colaboradores altamente capacitados e com vasta experiência no setor.
                        Estamos preparados para suprir as necessidades de empresas de todos os tamanhos.
                    </Text>
                </Paragraph>
            </Content>
        </AppContainer>
    );
}

export default Company;