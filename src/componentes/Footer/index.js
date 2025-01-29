import styled from "styled-components";

const FooterContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 30vh;
    background-color: black;
    margin-top: 25px;
    align-items: center;
    flex-direction: column;
`

const DivIcons = styled.div`
    background-color: red;
    width: 25vw;
    height: 10vh;  
    margin-top: 30px;
`
const DivInfo = styled.div`
    background-color: red;
    width: 40vw;
    height: 10vh;
    margin-top: 10px;
`
const DivCredits = styled.div`
    width: 100vw;
    height: 3vh;
    background-color: red;
    margin-top: 30px;
`

function Footer(){
    return(
        <FooterContainer>
            <DivIcons />
            <DivInfo />
            <DivCredits />

        </FooterContainer>
    );
};

export default Footer;