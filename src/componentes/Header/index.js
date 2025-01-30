import logo from '../../imagens/logo.svg';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 25px;
    width: 100%;
`;

const LogoImage = styled.img`
    width: 260px;
    margin-bottom: 10px; /* Adiciona espaço abaixo da logo */
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
                            <Nav.Link href="#" className="nav-link">Home</Nav.Link>
                            <Nav.Link href="#" className="nav-link">Empresa</Nav.Link>
                            <Nav.Link href="#" className="nav-link">Produtos</Nav.Link>
                            <Nav.Link href="#" className="nav-link">Contato</Nav.Link>
                        </NavLinks>
                    </Navbar.Collapse>
                </Navbar>
            </NavbarContainer>
        </HeaderContainer>
    );
}

export default Header;
