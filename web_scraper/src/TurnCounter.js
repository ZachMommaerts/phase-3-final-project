import styled from "styled-components"

const Div = styled.div`
    margin-left: 12rem;
`;

const P = styled.p`
    color: #EDEDED;
    &:hover {
        cursor: default;
    }
`

export default function TurnCounter( { turnCounter } ) {

    return (
        <Div>
            {turnCounter > 10 ? <P>Turn: 10/10</P> : <P>Turn: {turnCounter}/10</P>}
        </Div>
    )
}