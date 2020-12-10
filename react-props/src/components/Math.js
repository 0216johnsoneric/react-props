// Create a new component named "Math"
// Render one Math component in the place of each "?" mark
// Math should accept 3 props
// num1, operator, and num2
// Math should return a span tag displaying the result e.g.  19 + 341 = 360

function Math(props) {
    let value = "";

    switch (props.operation) {
        case "+":
            value = props.num1 + props.num2 
            break;
        case "-":
            value = props.num1 - props.num2 
        break;
        case "*":
            value = props.num1 * props.num2 
        break;
         case "/":
            value = props.num1 / props.num2 
        break;
        default:
            value = NaN;
    }
    return <span>{value}</span>
}

export default Math