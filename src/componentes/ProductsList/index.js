import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

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
                            <img src="https://media.discordapp.net/attachments/1334304781669240832/1336481384130285590/moveis.jpeg?ex=67a3f6c8&is=67a2a548&hm=ca85f40eeb64eb30cccc808d4a672299e78352da0974ecb4dd3acb8c2cfa50b3&=&format=webp&width=671&height=671" className="card-img-top" alt="Moveleira" />
                            <CardBodyStyled>
                                <CardTitle className="card-text">LINHA MOVELEIRA</CardTitle>
                                <a href="#" class="btn btn-primary">Ver Linha</a>
                            </CardBodyStyled>
                        </CardStyled>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                        <CardStyled className="card">
                            <img src="https://media.discordapp.net/attachments/1334304781669240832/1336480786903466115/A_single_car_wheel_elegantly_isolated_against_a_white_background_in_a_professional_fine_art_photograph._Soft_cinematic_haze_warm_and_slightly_dark_tones_and_soft_focus_create_a_refined_graceful_image_reminiscent_of_award.jpg?ex=67a3f63a&is=67a2a4ba&hm=3d2fd86af694e82b42dc1eafd81e707b5c7373e8c6931054ee99829aefa92d96&=&format=webp&width=671&height=671" className="card-img-top" alt="Automotiva" />
                            <CardBodyStyled>
                                <CardTitle className="card-text">LINHA AUTOMOTIVA</CardTitle>
                                <a href="#" class="btn btn-primary">Ver Linha</a>
                            </CardBodyStyled>
                        </CardStyled>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                        <CardStyled className="card">
                            <img src="https://media.discordapp.net/attachments/1334304781669240832/1336484178967007303/remedio_hospitalar_real_com_fundo_branco.png?ex=67a3f962&is=67a2a7e2&hm=21bc789323e5e7102ada023c0c17c24d38bf6e9902e24df9b1c6646be23e20b1&=&format=webp&quality=lossless&width=671&height=671" className="card-img-top" alt="Hospitalar" />
                            <CardBodyStyled>
                                <CardTitle className="card-text">LINHA HOSPITALAR</CardTitle>
                                <a href="#" class="btn btn-primary">Ver Linha</a>
                            </CardBodyStyled>
                        </CardStyled>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                        <CardStyled className="card">
                            <img src="https://media.discordapp.net/attachments/1334304781669240832/1336482894281179198/A_high-angle_digital_sketch_of_a_silhouetted_question_mark_misty_atmospheric_background_rough_painterly_strokes_loose_style_complementary_epic_colors_backlighting_rich_textures_evoking_a_fantasy_scene.jpg?ex=67a3f830&is=67a2a6b0&hm=b565fe151d72753fef7378ff94cc8a8bb9f168a5a877e82b41259adcf463c9f5&=&format=webp&width=671&height=671" className="card-img-top" alt="MOVELEIRA" />
                            <CardBodyStyled>
                                <CardTitle className="card-text">LINHA DE COXIM</CardTitle>
                                <a href="#" class="btn btn-primary">Ver Linha</a>
                            </CardBodyStyled>
                        </CardStyled>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                        <CardStyled className="card">
                            <img src="https://media.discordapp.net/attachments/1334304781669240832/1336482894281179198/A_high-angle_digital_sketch_of_a_silhouetted_question_mark_misty_atmospheric_background_rough_painterly_strokes_loose_style_complementary_epic_colors_backlighting_rich_textures_evoking_a_fantasy_scene.jpg?ex=67a3f830&is=67a2a6b0&hm=b565fe151d72753fef7378ff94cc8a8bb9f168a5a877e82b41259adcf463c9f5&=&format=webp&width=671&height=671" className="card-img-top" alt="MOVELEIRA" />
                            <CardBodyStyled>
                                <CardTitle className="card-text">LINHA DE VEDAÇÃO</CardTitle>
                                <a href="#" class="btn btn-primary">Ver Linha</a>
                            </CardBodyStyled>
                        </CardStyled>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                        <CardStyled className="card">
                            <img src="https://media.discordapp.net/attachments/1334304781669240832/1336482894281179198/A_high-angle_digital_sketch_of_a_silhouetted_question_mark_misty_atmospheric_background_rough_painterly_strokes_loose_style_complementary_epic_colors_backlighting_rich_textures_evoking_a_fantasy_scene.jpg?ex=67a3f830&is=67a2a6b0&hm=b565fe151d72753fef7378ff94cc8a8bb9f168a5a877e82b41259adcf463c9f5&=&format=webp&width=671&height=671" className="card-img-top" alt="MOVELEIRA" />
                            <CardBodyStyled>
                                <CardTitle className="card-text">LINHA DE PROTETORES</CardTitle>
                                <a href="#" class="btn btn-primary">Ver Linha</a>
                            </CardBodyStyled>
                        </CardStyled>
                    </div>
                </div>
            </div>
        </BodyContainer>
    );
};

export default ProductList;