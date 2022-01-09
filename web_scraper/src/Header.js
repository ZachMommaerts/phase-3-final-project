import styled from 'styled-components';

const Container = styled.div`
    background-color: #AA0A0A;
    display: flex;
    justify-content: center;
`;

export default function Header() {

    return (
        <Container>
            <h1>Billboard Battle</h1>
        </Container>
    )
}

