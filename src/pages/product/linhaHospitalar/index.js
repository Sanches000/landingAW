import styled from "styled-components";
import { Link } from 'react-router-dom'
import ImgCard from '../../../imagens/CardImages/ProductCategoryCard/ProductCard/caderno.png'

const BodyContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    margin-top: 25px;
`;

const CardStyled = styled.div`
    width: 18rem;
    border: 1px solid #ddd;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    background-color: #343a40;
`;

const CardBodyStyled = styled.div`
    color: white;
    padding: 1.25rem;
    font-size: 1rem;
    text-align: left
    align-items: center;
`;
const CardTitle = styled.h6`
    text-align: center;
    padding-bottom: 20px;
`

function LinhaHospitalar() {
    return (
        <BodyContainer>
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                        <CardStyled className="card">
                            <img src={ImgCard} className="card-img-top" alt="img 300x300" />
                            <CardBodyStyled>
                                <CardTitle className="card-text">TITULO</CardTitle>
                                <Link to="" class="btn btn-primary">Ver Produto</Link>
                            </CardBodyStyled>
                        </CardStyled>
                    </div>
                </div>
            </div>
        </BodyContainer>
    )
}

export default LinhaHospitalar;