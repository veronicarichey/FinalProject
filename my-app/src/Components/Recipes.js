import React, {useState} from 'react';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Recipe from './Recipe';
import Alert from './Alert';

const Recipes = () => {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes]= useState([]);
    const [alert, setAlert] = useState("");

    const RECIPES_ID = "6a78c258";
    const RECIPES_KEY = "3c9a8fd79d0f7a5b3c2b082304ce792a";
    const url= `https://api.edamam.com/search?q=${query}&app_id=6a78c258&app_key=3c9a8fd79d0f7a5b3c2b082304ce792a`;

    const getData = async () => {
        if(query !== "") {
        const result = await Axios.get(url);
        if(!result.data.more) {
            return setAlert('No recipe found');
        }
        setRecipes(result.data.hits);
        console.log(result);
        setAlert("");
        setQuery("");
    } else {
        setAlert('Please search a recipe');
    }
};

    const onChange = (e) => {
        setQuery(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        getData();
    }


    return (
        <div className="searchBox">
            <h1 className="recipesheader">Search Our Yummy Recipes</h1>
            <form className="search-form" onSubmit={onSubmit}>
                {alert !== "" && <Alert alert={alert} />} 
                <input type="text" placeholder="Search Recipes" autoComplete="off" onChange={onChange} value={query}/>
                <input type="submit" value="Search"/>
            </form>
            <div className="recipes">
                {recipes !== [] && recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
            </div>
        </div>
    )
}



export default Recipes