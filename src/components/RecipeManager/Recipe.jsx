

function Recipe ({name, description, cuisine, difficulty, cookTime, servings, allergens, ingredients, onDelete}) {
    return (
    <div>
            <li className="recipe-item">  

                <div className="recipe-info">
                    <span className="recipe-name">{name}</span>
                    <span className="recipe-description">{description}</span>
                    <span className="recipe-description">{cuisine}</span>
                    <span className="recipe-description">{difficulty}</span>
                    <span className="recipe-description">{cookTime}</span>
                    <span className="recipe-description">{servings}</span>
                    <span className="recipe-description">{allergens}</span>
                    <span className="recipe-description">{ingredients}</span>
                    <button onClick={onDelete} className="delete-button">Delete</button>
                </div>
            </li> 
    </div>
    )
}
export default Recipe