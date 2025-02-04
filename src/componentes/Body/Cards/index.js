import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import card1 from '../../../imagens/CardImages/card1.png'
import card2 from '../../../imagens/CardImages/card2.png'
import card3 from '../../../imagens/CardImages/card3.png'

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
    background-color: #343a40;
`;

const CardBodyStyled = styled.div`
    color: white;
    padding: 1.25rem;
    font-size: 1rem;
    text-align: left
`;
const CardTitle = styled.h6`
    text-align: center;
    padding-bottom: 20px;
`

function Cards() {
    return (
        <BodyContainer>
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                        <CardStyled className="card">
                            <img src={card1} className="card-img-top" alt="..." />
                            <CardBodyStyled>
                                <CardTitle className="card-text">QUALIDADE</CardTitle>
                                <p>Na Almeida & Werneck, cada etapa do processo de produção é meticulosamente monitorada para garantir a excelência dos nossos produtos. Utilizamos materiais de primeira linha e técnicas inovadoras, sempre com um olhar atento aos mínimos detalhes.</p>
                            </CardBodyStyled>
                        </CardStyled>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                        <CardStyled className="card">
                            <img src={card2} className="card-img-top" alt="..." />
                            <CardBodyStyled>
                                <CardTitle className="card-text">AGILIDADE</CardTitle>
                                <p>Nossas operações de produção e entrega são cuidadosamente otimizadas para garantir rapidez e eficiência. Desde o momento do pedido até a entrega final, nossa equipe trabalha com dedicação para atender aos prazos estabelecidos.</p>
                            </CardBodyStyled>
                        </CardStyled>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                        <CardStyled className="card">
                            <img src={card3} className="card-img-top" alt="..." />
                            <CardBodyStyled>
                                <CardTitle className="card-text">SATISFAÇÃO DE CLIENTES</CardTitle>
                                <p>A satisfação dos nossos clientes é o nosso principal objetivo. Trabalhamos incansavelmente para entender e atender às necessidades específicas de cada cliente, oferecendo produtos de alta qualidade e um atendimento personalizado.</p>
                            </CardBodyStyled>
                        </CardStyled>
                    </div>
                </div>
            </div>
        </BodyContainer>
    );
}

export default Cards;