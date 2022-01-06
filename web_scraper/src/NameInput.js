export default function NameInput( {createUser} ) {
    return (
        <form onSubmit={() => createUser()}>
            <label>
                Username:
                <input type='text' name='username' />
            </label>
            <input type='submit' value='Submit' />
        </form>
    )
}