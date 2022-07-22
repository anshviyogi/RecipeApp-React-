import { useEffect, useState } from 'react'
import './App.css'
import Recipe from './Components/Recipe'
function App(){
const APP_ID = "dc34792b"
const APP_KEY = "3eab1a651f78f58e8b394f905f3efa21"

const[recipe,setRecipe] = useState([])   //for api array return
const[search,setSearch] = useState("")   // on search bar
const [query,setQuery] = useState("")    // take value of search bar after click

useEffect(()=>{
  function getRecipe(){
    fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      .then(res => res.json())
      .then(data => setRecipe(data.hits))
  }
  
  getRecipe()
},[query])

const getSearch = (e)=>{
  e.preventDefault()
  console.log(search)
  setQuery(search)
  setSearch("")
  if(search === ""){
    alert("Type something to search")
  }
}

return(

  <div className="App">

    <form className='head-form' onSubmit={getSearch}>
    <input type="text" className="search-input" placeholder='Type your favourite dish' value={search} onChange={e => setSearch(e.target.value)}></input>
    <button className='search-btn' type="submit">Search</button>
    </form>

    <div className="recipes">
    {recipe.map((recipe,key)=> <Recipe key={key} title={recipe.recipe.label}
    ingreidents={recipe.recipe.ingredients}
    calories={recipe.recipe.calories}
    image = {recipe.recipe.image}
    />)}
    </div>
  </div>
)
    }

export default App