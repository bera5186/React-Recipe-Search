import React from 'react';


const Recipies = ({ title, calories, image, ingredients, url, tags }) => {


    var recipeButton = <a href={url} target="_blank" rel="noopener noreferrer"><button className="btn btn-success">View Full Recipie</button></a>

    return (
        <div className="card mt-5">
            <center><img className="rounded-circle mt-2" width="200px" height="200px" src={image} alt={title} /></center>
            <div className="card-body">
                <h4 className="card-title text-center">{title}</h4> <p className="help-text">Calories: {calories}</p>

                <span className="card-text">
                    Ingredients :
                    <ul>
                        {ingredients.map(ingredient => (
                            <li key={ingredient.text}>{ingredient.text}</li>
                        ))}
                    </ul>
                </span>
                <center>
                    {recipeButton}
                </center>
            </div>
        </div>
    )

}

export default Recipies