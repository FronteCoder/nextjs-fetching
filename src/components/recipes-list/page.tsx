"use client"
import { Card, CardHeader, CardFooter, CardTitle, CardContent} from '@/components/ui/card'
import { useRouter } from 'next/navigation';


export default function RecipesList({recipes}:any){
   function navigateToDetails(route:string){
    router.push(route);
   }
    const router=useRouter();
    return <>
        {
            recipes.length>0?
            <div className='p-4 m-5 grid grid-cols-1 md:grid-cols-4 gap-3'>
            {recipes.map((recipe:any)=>{
                return <>
                <Card className='hover:p-1 hover:cursor-pointer' onClick={()=>{navigateToDetails(`/recipe-list/${recipe.id}`)}}>
                    <CardHeader>
                        <CardTitle className='font-bold text-red-400 text-center'>
                        {recipe?.name}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <img src={recipe?.image}
                            alt={recipe?.name}
                            width={400}
                            height={350}
                        />
                    </CardContent>
                    <CardFooter>
                        <div className='flex justify-around w-full'>
                        <div className='text-green-500 font-bold'>{recipe?.cuisine}</div>
                        <div className='text-yellow-600 font-extrabold'>{recipe?.rating}</div>
                        </div>
                    </CardFooter>
                </Card>
                </>
            
            })}
            </div>
            :null
        }
    </>
}