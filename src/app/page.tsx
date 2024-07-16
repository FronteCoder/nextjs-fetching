import { Skeleton } from "@/components/ui/skeleton";
import Loading from "./loading";
import Link from "next/link";

export default function Home(){
  return <>
  <h1 className="text-center font-extrabold antialiased">Welcome to recipe App</h1>
    <Link href={'recipe-list'}>Go to Recipes List Page</Link>
  </>
}