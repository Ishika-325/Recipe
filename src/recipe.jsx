

export function Section(props){
 
  return(
    <div className="sectionRecipe">

      <h2>Chef Claude Recommends:</h2>
      <ol>
        {props.reci.map((recipe){
          console.log(recipe);
          return(
               <li>{recipe}</li>
        )})}
       
      </ol>
    </div>
  )
}

 