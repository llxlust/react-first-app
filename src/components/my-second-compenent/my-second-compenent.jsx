function MySecondComponent() {
  const imgSrc = "https://i.imgur.com/yXOvdOSs.jpg";

  const onButtonClick = () => {
    alert("on This button click");
  }

  const displayFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
  }

  const myName = {
    name: 'Varis',
    lastName: 'Darasirikul'
  }

  return (
    <>
      <h1>My name: {myName.name} {myName.lastName}</h1>

      <img
        src={imgSrc}
        alt="Hedy Lamarr"
        className="photo"
      />

      <input readOnly={true} />

      <button onClick={onButtonClick}>click me</button>

      <p style={{
        color: 'blue'
      }}>
        {displayFullName('varis', 'darasirikul')}
      </p>
    </>
  );
}

export default MySecondComponent;
