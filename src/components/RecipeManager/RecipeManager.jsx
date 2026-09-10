import { useState } from "react";
import "./RecipeManager.css";
import Recipe from "./Recipe.jsx";
 

function RecipeManager() {

  // writing variables for each input field:
  const [recipeList, setRecipeList] = useState([]);
  const [name, setName] = useState(""); 
  const [description, setDescription] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [servings, setServings] = useState("");
  const [allergens, setAllergens] = useState("");
  const [ingredients, setIngredients] = useState("");

  // functions to handle input changes for each field:
  function handleNameChange(event) {setName(event.target.value);}
  function handleDescriptionChange(event) {setDescription(event.target.value);}
  function handleCuisineChange(event) {setCuisine(event.target.value);}
  function handleDifficultyChange(event) {setDifficulty(event.target.value);}
  function handleCookTimeChange(event) {setCookTime(event.target.value);}
  function handleServingsChange(event) {setServings(event.target.value);}
  function handleAllergensChange(event) {setAllergens(event.target.value);}
  function handleIngredientsChange(event) {setIngredients(event.target.value);}

  function addRecipe () {
    if (name.trim() === "" || description.trim() === "" || cuisine.trim() === "" || difficulty.trim() === "" 
        || cookTime.trim() === "" || servings.trim() === "" || allergens.trim() === "" 
        || ingredients.trim() === ""  ) {
          alert("All fields are required.");
        return;
      }
          
    setRecipeList((r) => [...r, { name, description, cuisine, difficulty, cookTime, servings, allergens, ingredients}]);
    // Clear the input fields: 
    setName("");
    setDescription("");
    setCuisine("");
    setDifficulty("");
    setCookTime("");
    setServings("");    
    setAllergens("");
    setIngredients("");
  }
 
  function deleteRecipe (index) {
    const newRecipeList = recipeList.filter((recipe, i) => i !== index);
    setRecipeList(newRecipeList);
    return newRecipeList; 
  }

  return (
  <div className="app-container">
      <h1>Recipe Manager</h1>

      <div className="input-section">
          <input 
              type="text"
              placeholder="Enter recipe name"
              value={name}
              onChange={handleNameChange}
              className="input-field"
          />
          <input 
              type="textarea"
              placeholder="Enter description"
              value={description}
              onChange={handleDescriptionChange}
              className="input-field"
          />
          <input 
              type="text"
              placeholder="Enter cuisine"
              value={cuisine}
              onChange={handleCuisineChange}
              className="input-field"
          />
          <select 
              value={difficulty}
              onChange={handleDifficultyChange}
              className="input-field">
              <option value="">Choose difficulty</option> 
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
          </select>

          <input 
              type="number"
              placeholder="Enter cook time"
              value={cookTime}
              onChange={handleCookTimeChange}
              className="input-field"
          />
          <input 
              type="number"
              placeholder="Enter servings"
              value={servings}
              onChange={handleServingsChange}
              className="input-field"
          />
          <input 
              type="text"
              placeholder="Enter allergens"
              value={allergens}
              onChange={handleAllergensChange}
              className="input-field"
          />
          <input 
              type="textarea"
              placeholder="Enter ingredients"
              value={ingredients}
              onChange={handleIngredientsChange}
              className="input-field"
          />

          <button onClick={addRecipe} className="add-button">
              Add Recipe
          </button>
      </div>


      <div className="recipe-section">
            <h2>Your Recipes ({recipeList.length})</h2>
            {recipeList.length === 0 ? (
              <p className="empty-message">No recipes yet. Add one to get started!</p>
            ) :(
              <ol className="recipe-list">
                {recipeList.map((recipe, index) => (
                  <Recipe
                    key={index}
                    name={recipe.name}
                    description={recipe.description}
                    cuisine={recipe.cuisine}
                    difficulty={recipe.difficulty}
                    cookTime={recipe.cookTime}
                    servings={recipe.servings}
                    allergens={recipe.allergens}
                    ingredients={recipe.ingredients}
                    onDelete={() => deleteRecipe(index)}
                  />
                ))}
              </ol>
            )}
      </div>
  </div>
  )
}
 
export default RecipeManager