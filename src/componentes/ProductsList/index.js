import styled from "styled-components";
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import coxim from '../../imagens/CardImages/ProductCategoryCard/coxim.jpg'
import moveis from '../../imagens/CardImages/ProductCategoryCard/moveis.jpeg'
import remedios from '../../imagens/CardImages/ProductCategoryCard/remedios.png'
import vedacao from '../../imagens/CardImages/ProductCategoryCard/vedacao.jpg'
import wheel from '../../imagens/CardImages/ProductCategoryCard/wheel.jpg'
import client from '../../imagens/CardImages/ProductCategoryCard/ProductCard/caderno.png'

const BodyContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    margin: 0 auto;
    margin-top: 25px;
`;

const CardStyled = styled.div`
    width: 18rem;
    border: 1px solid #ddd;
    border-radius: 2.5rem;
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
function ProductList() {
    return (
        <BodyContainer>
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                        <CardStyled className="card">
                            <img src={moveis} className="card-img-top" alt="Moveleira" />
                            <CardBodyStyled>
                                <CardTitle className="card-text">LINHA MOVELEIRA</CardTitle>
                                <Link to="/LinhaMoveleira"class="btn btn-primary">Ver Linha</Link>
                            </CardBodyStyled>
                        </CardStyled>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                        <CardStyled className="card">
                            <img src={wheel} className="card-img-top" alt="Automotiva" />
                            <CardBodyStyled>
                                <CardTitle className="card-text">LINHA AUTOMOTIVA</CardTitle>
                                <Link to="/LinhaAutomotiva" class="btn btn-primary">Ver Linha</Link>
                            </CardBodyStyled>
                        </CardStyled>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                        <CardStyled className="card">
                            <img src={remedios} className="card-img-top" alt="Hospitalar" />
                            <CardBodyStyled>
                                <CardTitle className="card-text">LINHA HOSPITALAR</CardTitle>
                                <Link to="/LinhaHospitalar" class="btn btn-primary">Ver Linha</Link>
                            </CardBodyStyled>
                        </CardStyled>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                        <CardStyled className="card">
                            <img src={coxim} className="card-img-top" alt="MOVELEIRA" />
                            <CardBodyStyled>
                                <CardTitle className="card-text">LINHA DE COXIM</CardTitle>
                                <Link to="/LinhaCoxim" class="btn btn-primary">Ver Linha</Link>
                            </CardBodyStyled>
                        </CardStyled>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                        <CardStyled className="card">
                            <img src={vedacao} className="card-img-top" alt="MOVELEIRA" />
                            <CardBodyStyled>
                                <CardTitle className="card-text">LINHA DE VEDAÇÃO</CardTitle>
                                <Link to="/LinhaVedacao" class="btn btn-primary">Ver Linha</Link>
                            </CardBodyStyled>
                        </CardStyled>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                        <CardStyled className="card">
                            <img src={client} className="card-img-top" alt="MOVELEIRA" />
                            <CardBodyStyled>
                                <CardTitle className="card-text">DESENVOLVA SEU PRODUTO</CardTitle>
                                <Link to="/Contato" class="btn btn-primary">Realizar Cotação</Link>
                            </CardBodyStyled>
                        </CardStyled>
                    </div>
                </div>
            </div>
        </BodyContainer>
    );
};

export default ProductList;