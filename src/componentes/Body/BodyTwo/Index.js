import styled from "styled-components";

const BodyContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 65vh;
    justify-content: space-between;
`
const DivOne = styled.div`
    background-color: #808080;
    width: 25vw;
    height: 50vh;
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 70px;
`

function BodyTwo(){
    return(
        <BodyContainer>
            <DivOne />
            <DivOne />
            <DivOne />
        </BodyContainer>
    );
};

export default BodyTwo;