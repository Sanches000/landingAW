import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import cardImage from '../../../imagens/cardImage.png';

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
    border-radius: 0.25rem;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

const CardBodyStyled = styled.div`
    background-color: #343a40;
    color: white;
    padding: 1.25rem;
    font-size: 1rem;
`;

function Cards() {
    return (
        <BodyContainer>
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                        <CardStyled className="card">
                            <img src={cardImage} className="card-img-top" alt="..." />
                            <CardBodyStyled>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </CardBodyStyled>
                        </CardStyled>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                        <CardStyled className="card">
                            <img src={cardImage} className="card-img-top" alt="..." />
                            <CardBodyStyled>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </CardBodyStyled>
                        </CardStyled>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                        <CardStyled className="card">
                            <img src={cardImage} className="card-img-top" alt="..." />
                            <CardBodyStyled>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </CardBodyStyled>
                        </CardStyled>
                    </div>
                </div>
            </div>
        </BodyContainer>
    );
}

export default Cards;