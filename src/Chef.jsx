import Head from './head'
import List from './List'
import { useState , useRef , useEffect } from 'react'
import RecipeList from './RecipeList'
import RecipeDetails from './RecipeDetails'
import { Article } from './Article'
import { HeadForm} from './HeadForm'
import "./index.css"

export function Chef(){

    let [value , set ] = useState( []  );
    let [num , fun ] = useState("")
    let [recipes, setRecipes] = useState(null);
    let [selectedRecipe, setSelectedRecipe] = useState(null);
    const myKey = import.meta.env.VITE_MYAPI ;
  
  
    function signUp(formData){
        const newIngredient = formData.get("ingredient");
        set(prev=> [...prev , newIngredient])
    }


  
    async function showRecipe(){
        const query = value.join(",+"); 
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await response.json();
        console.log(data.meals);
        setRecipes(data.meals || []);
        fun(data.meals || '')
        setSelectedRecipe(null);
       
    }

    const handleRemove = (indexToRemove) => {
    set(
      value.filter((_, index) => index !== indexToRemove)
    );
  };

   const ingredients = value.map((ingredient, index) => {
        return (
            <li key={index}>
                {ingredient} <button className='remove' onClick={() => handleRemove(index)}> <i className="fa-regular fa-circle-xmark"></i></button>
            </li>
        )
    });
   


  

       const scrolrecipe = useRef(null)
       const recipeDetailRef = useRef(null);

      useEffect(() => {
        if(num!=='' && scrolrecipe.current !=null ){
           // scrolrecipe.current.scrollIntoView({behaviour: "smooth"})
            const yCoord = scrolrecipe.current.getBoundingClientRect().top + window.scrollY
            window.scroll({
                top: yCoord,
                behavior: "smooth"
            })
        }

      }, [num]) 

      useEffect(() => {
        if(selectedRecipe && recipeDetailRef.current !=null ){
           // scrolrecipe.current.scrollIntoView({behaviour: "smooth"})
            const yCoord = recipeDetailRef.current.getBoundingClientRect().top + window.scrollY
            window.scroll({
                top: yCoord,
                behavior: "smooth"
            })
        }

      }, [selectedRecipe])

    return(
        <div>
            <Head />
            <HeadForm action={signUp} />
           <List ingredients={ingredients} />
            {ingredients.length>0 && <Article showRecipe={showRecipe}  ref={scrolrecipe} />} 
            {recipes && (<RecipeList recipes={recipes} onSelectRecipe={setSelectedRecipe} /> )}
               {selectedRecipe && (
                <div ref={recipeDetailRef}>
                    <RecipeDetails recipe={selectedRecipe} />
                </div>
            ) }
            </div>
           

    )
}