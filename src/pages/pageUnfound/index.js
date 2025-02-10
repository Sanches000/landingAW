import styled from "styled-components"
import { Link } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f8f9fa;
    text-align: center;
    padding: 0 20px;
`;

const Title = styled.h1`
    font-size: 6rem;
    font-weight: bold;
    margin: 0;
    @media (max-width: 768px) {
        font-size: 4rem;
    }
`;

const Lead = styled.p`
    font-size: 1.5rem;
    margin-bottom: 1rem;
`;

const Message = styled.p`
    font-size: 1rem;
    margin-bottom: 2rem;
`;

const HomeButton = styled(Link)`
    display: inline-block;
    padding: 10px 20px;
    font-size: 1rem;
    color: white;
    background-color: #007bff;
    border-radius: 5px;
    text-decoration: none;
    &:hover {
    background-color: #0056b3;
  }
`;

export default function ErrorPage() {
    return (
        <Container>
            <Title>404</Title>
            <Lead>Ops! Página não encontrada.</Lead>
            <Message>A página que você está procurando pode ter sido removida, teve seu nome alterado, ou está temporariamente indisponível.</Message>
            <HomeButton to="/">Voltar ao Início</HomeButton>
        </Container>
    )
}