import React from 'react';


const Recipies = ({ title, calories, image, ingredients, url, tags }) => {

    // let fourIngredients = []
    // const IngredientListToRender = ''
    // if(ingredients.length > 4) {
    //     fourIngredients = ingredients.slice(0,4)
    //     IngredientListToRender = 
    // }
    var recipeButton = <a href={url} target="_blank" rel="noopener noreferrer"><button className="btn btn-success">View Full Recipie</button></a>

    return (
        <div className="card mt-5">
            <center><img className="rounded-circle mt-2" width="200px" height="200px" src={image} alt={title} /></center>
            <div className="card-body">
                <h4 className="card-title">{title}</h4> <p className="help-text">Calories: {calories}</p>

                <p className="card-text">
                    Ingredients :
                    <ul>
                        {ingredients.map(ingredient => (
                            <li>{ingredient.text}</li>
                        ))}
                    </ul>
                </p>
                <center>
                    {recipeButton}
                </center>
            </div>
        </div>
    )

}

export default Recipies