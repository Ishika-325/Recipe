export function Article(prop) {
    return(
           <div ref={prop.ref} className="box">
            <div>
              <h2>Ready for the recipe ?</h2>
              <p>Generate a recipe from your list of ingredients</p>
            </div>
              <button className="reci" onClick={prop.showRecipe}>Get a recipe</button>
            </div>
        
    )
}