import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    padding-top: 50px;
    display: flex;
    justify-content: center;
    width: 80vw;
    margin: 0 auto;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
        </HeaderContainer>
    )
}

export default Header