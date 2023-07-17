const Button = () => {
    const clickFunction = () => {
        alert("You clicked me!");
      };
    return (
        <button onClick={clickFunction}>Click Me</button>
    )
}

export default Button;