import { useState } from 'react'
import './App.css'
import foodsJson from './foods.json'
import FoodBox from './components/FoodBox'
import AddFoodForm from './components/AddFoodForm'

function App() {
  const [foods, setFoods] = useState(foodsJson)
  const [searchTerm, setSearchTerm] = useState('')

  const addNewFood = newFood => {
    setFoods([newFood, ...foods])
    /* setFoods(prevFoods => {
      const nextFoods = structuredClone(prevFoods)
      nextFoods.unshift(newFood)
      return nextFoods
    }) */
  }

  const deleteFood = foodId => {
    setFoods(foods.filter(food => food.id !== foodId))
  }

  return (
    <div className='App'>
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm addNewFood={addNewFood} />
      <label>
        Search
        <input value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
      </label>
      {foods
        .filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .map(food => (
          <FoodBox key={food.id} {...food} deleteFood={deleteFood} />
        ))}
    </div>
  )
}

export default App
