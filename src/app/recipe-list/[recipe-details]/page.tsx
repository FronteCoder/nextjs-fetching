import RecipeDetailPage from "@/components/recipe-detail-page/page";

async function fetchRecipe(id:string) {
    try {
        const apiResponse=await fetch('https://dummyjson.com/recipes/'+id);
        const result=await apiResponse.json();
        return result;
    } catch (error:any) {
        throw new Error(error)
    }
    
}

export default async function RecipeDetail({params}:any){
    const details=await fetchRecipe(params['recipe-details']);
    return <>
    <RecipeDetailPage recipeDetail={details}/>
    </>
}