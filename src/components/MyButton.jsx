// new component created


function MyButton(props) {
    console.log('MyButton props', props)
    // component logic
    const btnStyle = {
        margin: '1rem',
        fontSize: '1rem',
        color: props.color

    }
    const veryImportantNumber = 54 * 78
    return <button style={btnStyle}>{props.text} {veryImportantNumber}</button>;

}
export default MyButton;
