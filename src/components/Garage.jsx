function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 && (<><h2>You have {cars.length} cars in your garage.</h2>
      <ul class="list-group">
        {props.cars.map((car,i)=>(
          <li key={i} class="list-group-item">{car}</li>
        ))}
      </ul> </>)
      }
    </>
  );
}

export default Garage;