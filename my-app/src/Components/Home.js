import React from 'react';
import Food from './Images.js/Food.jpg'
import RecipeCard from './RecipeCard';
import CardData from './CardData';


export default function Home() {
    

    return (
        <>
            <img className="title-photo" src={Food} alt='food'/>
            <h2>Try Our Scrumptious Recipes</h2>
            <div className="home-cards">
                <RecipeCard details={CardData} />
            </div>
        </>
    )
}