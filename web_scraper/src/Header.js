import styled from 'styled-components';

const Container = styled.div`
    margin-right: 25rem;
    margin-left: 25rem;
    background-color: #AA0A0A;
    display: flex;
    justify-content: center;
    height: 20vh;
`;

export default function Header() {

    return (
        <Container>
            <h1>Billboard Battle</h1>
        </Container>
    )
}

