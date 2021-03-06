import styled from "styled-components"

const Div = styled.div`
    margin-left: 31em;
`;

const P = styled.p`
    color: #EDEDED;
    &:hover {
        cursor: default;
    }
`

export default function SongCard( { score } ) {
    return (
        <Div>
            <P>Score: {score}</P>
        </Div>
    )
}