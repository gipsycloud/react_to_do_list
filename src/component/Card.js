function Card(props) {
  console.log(props)
  // destructuring props
  const { image, title, text, number } = props;
  function handleClick() {
    console.log("Card clicked!");
  }
  return (
    <section className="card">
      <img style={{ width: "50%", height: "50%" }} src={image} alt='Random' />
      <h2 style={{ marginTop: "1rem" }}>{title}</h2>
      <p>{text}</p>
      <p>{number}</p>
      <button onClick={handleClick} style={{ marginTop: "1rem" }}>
        Click Me
      </button>
    </section >
  );
}

export default Card;