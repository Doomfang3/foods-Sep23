import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const AddFoodForm = ({ addNewFood }) => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [calories, setCalories] = useState(0)
  const [servings, setServings] = useState(0)

  /*   const [values, setValues] = useState({
    name: '',
    image: '',
    calories: 0,
    servings: 0,
  })

  const handleChange = event => {
    const value = event.target.value
    const targetProperty = event.target.name

    setValues({ ...values, [targetProperty]: value })
  } */

  const handleSubmit = event => {
    event.preventDefault()
    addNewFood({ name, image, calories, servings, id: uuidv4() })
    setName('')
    setImage('')
    setCalories(0)
    setServings(0)
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
      <label>
        Name
        <input required value={name} onChange={event => setName(event.target.value)} />
      </label>
      <label>
        Image
        <input required value={image} onChange={event => setImage(event.target.value)} />
      </label>
      <label>
        Calories
        <input type='number' value={calories} onChange={event => setCalories(event.target.value)} />
      </label>
      <label>
        Servings
        <input type='number' value={servings} onChange={event => setServings(event.target.value)} />
      </label>
      <button type='submit'>Create</button>
    </form>
  )
}

export default AddFoodForm
