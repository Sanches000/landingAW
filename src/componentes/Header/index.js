import logo from '../../imagens/LogoImage/logo.svg';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom'

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-family: "Inter", serif;

`;

const LogoImage = styled.img`
    width: 260px;
    margin-bottom: 10px;
`;

const NavbarContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NavLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media (min-width: 992px) { /* Largura mínima de 992px para telas grandes */
        flex-direction: row;
        justify-content: center;

        .nav-link {
            margin: 0 15px; /* Adiciona espaçamento horizontal entre os links */
        }
    }
`;

function Header() {
    const [expanded, setExpanded] = useState(false);

    return (
        <HeaderContainer>
            <LogoImage
                src={logo}
                alt='logo'
            />
            <NavbarContainer>
                <Navbar expand="lg" expanded={expanded} onToggle={() => setExpanded(!expanded)} className="w-100 d-flex flex-column align-items-center">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-auto my-2" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <NavLinks>
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/Empresa" className="nav-link">Empresa</Link>
                            <Link to="/Produto" className="nav-link">Produtos</Link>
                            <Link to="/Contato" className="nav-link">Contato</Link>
                        </NavLinks>
                    </Navbar.Collapse>
                </Navbar>
            </NavbarContainer>
        </HeaderContainer>
    );
}

export default Header;
