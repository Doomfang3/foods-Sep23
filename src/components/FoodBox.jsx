const ctnStyle = { border: '1px solid white', borderRadius: '12px', marginBottom: '2rem' }

const FoodBox = ({ id, name, image, calories, servings, deleteFood = () => {} }) => {
  /* const { id, name, image, calories, servings, deleteFood = () => {} } = props */
  console.log({ id, name, image, calories, servings, deleteFood })

  return (
    <div style={ctnStyle}>
      <p>{name}</p>

      <img src={image} style={{ height: '100px' }} />

      <p>Calories: {calories}</p>
      <p>Servings {servings}</p>

      <p>
        <b>Total Calories: {calories * servings} </b> kcal
      </p>

      <button type='button' onClick={() => deleteFood(id)}>
        Delete
      </button>
    </div>
  )
}

export default FoodBox
