import RecipesList from "@/components/recipes-list/page";

async function fetchRecipes(){
    try {
        const apiResponse=await fetch('https://dummyjson.com/recipes?limit=0');
        const result=await apiResponse.json();
        return result.recipes;
    } catch (error:any) {
        throw new Error(error)
    }
}  


export default async function Receipe(){
  const recipeList=await fetchRecipes();
    
    return <>
  <h1 className="m-5 text-center font-extrabold antialiased text-green-500 text-3xl">Recipes</h1>
    <RecipesList recipes={recipeList}/>
    </>
}