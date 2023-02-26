import React from 'react'
import RecipeReview from './RecipeReview';

const RecipeCard = (props) => {
  return (
    <>
      {props.details.map((value, id) => (
            <div className="card" key={value.id}>
              <div className="card-image">
                <img src={value.img} />
              </div>
              <div>
                <p className="card-title">{value.title}</p>
                <p className="description">{value.description}</p>
                <a href={value.url} target="_blank" rel="noopener noreferrer">
                <button>Get the Recipe</button>
                </a>
              </div>
              <RecipeReview />
            </div> 
        ))}
    </>
  );
}

export default RecipeCard