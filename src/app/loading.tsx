import { Skeleton } from "@/components/ui/skeleton";

export default function Loading(){
    return <>
    <div className="h-screen w-screen flex justify-center items-center">
        <Skeleton className="w-[100px] h-[20px] rounded-full bg-gray-400"/>
    </div>
    </>
}