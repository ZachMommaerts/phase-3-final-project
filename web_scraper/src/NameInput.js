import styled from "styled-components";

const OuterWrapper = styled.div`
    padding: 2rem;
    line-height: 2rem;
`

const Wrapper = styled.div`
    margin-top: 4rem;
    margin-bottom: 3rem;
    text-align: center;
`;

const Form = styled.form`
    margin-top: 6rem;
    text-align: center;
`;

const TextInput = styled.input`
    font-size: 1rem;
    height: 1.5rem;
    width: 15rem;
`;

const Input = styled.input`
    margin-top: 1rem;
    width: 10rem;
    height: 2rem;
    border: none;
    padding: .25rem;
    color: #EDEDED;
    background-color: #AA0A0A;
    font-family: 'Assistant', sans-serif;
    border-radius: .15rem;
    font-size: 1.1rem;
    &:hover {
        background-color: #ff333b;
    }
`;

export default function NameInput( { setUser } ) {

    const createUser = (e) => {
        e.preventDefault();

        fetch('http://localhost:9292/players', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'username': e.target.username.value
            })
        })
        .then(r => r.json())
        .then(setUser)
        .catch(error => alert(error))
    }

    return (
        <OuterWrapper>
            <Wrapper>
                <h2>How to Play</h2>
            </Wrapper>
            <li>Two songs from the weekly Billboard 100 will be shown on either side of the screen.</li>
            <li>Click whichever song you think is currently ranked higher.</li>
            <li>If you do well enough, you might even see your name up on the leaderboards!</li>
            <Form onSubmit={(e) => createUser(e)}>
                <label>
                    <TextInput placeholder='username' type='text' name='username' />
                </label>
                <br />
                <Input type='submit' value="Play" />
            </Form>
        </OuterWrapper>
    )
}