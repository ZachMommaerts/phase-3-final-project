export default function NameInput() {
    return (
        <form>
            <label>
                Username:
                <input type='text' name='username' />
            </label>
            <input type='submit' value='Submit' />
        </form>
    )
}