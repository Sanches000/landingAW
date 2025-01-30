import logo from '../../imagens/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */
    width: 100%;
    padding: 25px 0; /* Adiciona espaço superior e inferior */
`;

const LogoImage = styled.img`
    width: 260px;
`;

function Logo() {
    return (
        <LogoContainer>
            <LogoImage
                src={logo}
                alt='logo' 
            />
       </LogoContainer>
    );
}

export default Logo;