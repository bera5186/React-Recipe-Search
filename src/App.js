import React, { useEffect, useState } from 'react';
import './App.css';
import keys from './keys';

// Components
import Recipies from './Components/Recipies';
import Loading from './Components/Loading'


function App() {

  // States
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('banana')
  const [loaded, setLoaded] = useState(false)

  const request = `https://api.edamam.com/search?q=${search}&app_id=${keys.APP_ID}&app_key=${keys.APP_KEY}`
  console.log(request)



  useEffect(() => {
    getRecipies()
  }, [search])

  const handleFormSubmit = event => {
    event.preventDefault()
    console.log(event.target.value)
    let query = event.target.recipeName.value
    console.log(typeof (query))
    setSearch(query.toLowerCase())
    document.title = 'Recipe Search - ' + event.target.recipeName.value
    setLoaded(false)
    event.target.reset()
  }

  const getRecipies = async () => {
    const response = await fetch(request)
    const data = await response.json()
    setRecipes(data.hits)
    setLoaded(true)
  }





  return (
    <div className="App">
      <div className="container">
        <form className="search-form mt-5" autoComplete="off" onSubmit={handleFormSubmit}>
          <input type="text" name="recipeName" id="recipeName" className="search-bar" />
          <button type="submit" className="search-button"><i className="fa fa-search" aria-hidden="true"></i> Search</button>
        </form>
      </div>
      <div className="container mt-5">
        <div>
          {(() => {
            switch (loaded) {
              case true: return (
                recipes.map((recipe) => (

                  <Recipies key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} url={recipe.recipe.url} />

                ))
              )
              case false: return (<Loading />)
              default: return (<Loading />)
            }
          })()}
        </div>
      </div>
    </div>
  );
}

export default App;
