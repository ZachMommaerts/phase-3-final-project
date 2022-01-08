import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const H1 = styled.h1`

`;

export default function Header() {

    return (
        <Container>
            <H1>Billboard Battle</H1>
        </Container>
    )
}

