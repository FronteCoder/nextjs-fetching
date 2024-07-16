export default function RecipeDetailPage({recipeDetail}:any){
  
    return<>
    <div className="p-5 w-full h-full">
        <h1 className="m-3 text-center font-bold text-black text-xl md:text-3xl">{recipeDetail.name}</h1>
        <div className="flex flex-col md:flex-row w-full p-3 m-3">
        <div className="mt-5">
            <img  className="mt-5 border-2 border-gray-600 rounded-xl" src={recipeDetail?.image} alt={recipeDetail?.name} width={565} height={650}/>
        </div>
        <div className="mt-5 p-5 m-5">
            <h2 className="font-semibold text-2xl">Ingredients:-</h2>
            <ul className="mt-1 ml-6 list-disc">
                {
                    recipeDetail?.ingredients.map((item:any,index:any)=>{
                        return <li className="font-bold m-2" key={index}>
                            {item}
                        </li>
                    })
                }
            </ul>
            <h2 className="mt-4 font-semibold text-2xl">Instructions:-</h2>
            <ul className="ml-6 list-decimal mt-1">
                {
                    recipeDetail?.instructions.map((item:any,index:any)=>{
                        return <li className="font-bold m-2" key={index}>
                            {item}
                        </li>
                    })
                }
            </ul>
        </div>
        </div>
    </div>
    </>
}