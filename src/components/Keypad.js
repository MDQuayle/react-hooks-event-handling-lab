function KeyPad(){
    function changeHandler() {
        console.log('Entering password...')
    }
    return (
        <input type="password" onChange={changeHandler}>
        </input>
    )
}

export default KeyPad;