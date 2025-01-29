import styled from 'styled-components'

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    cursor: pointer;
    min-width: 120px;
`

const Opcoes = styled.ul`
    display: flex;
    margin-right: 50px;
`

const textoOpcoes = ['HOME', 'EMPRESA', 'PRODUTOS', 'CONTATO']

function OpcoesHeader() {
    return (
        <Opcoes>
            { textoOpcoes.map( (texto) => (
                <Opcao><strong><p>{texto}</p></strong></Opcao>
            ) ) }
      </Opcoes>
    )
}

export default OpcoesHeader