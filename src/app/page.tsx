import { db } from "@/db";
import Link from "next/link";


export default async function Home() {

 
  const snippets = await db.snippet.findMany()



  const renderedSnippets = snippets.map((snippet)=>{
    return(
      <div key={snippet.id}>
      <div className="flex justify-between items-center  p-2 border " >
       <h1 className="text-4xl text-red-500">{snippet.title}</h1> 
      <Link href={`snippets/${snippet.id}`}>  <div className="border bg-red-500 text-3xl p-1
      hover:bg-red-800 
      hover:text-cyan-50 
      hover:font-sans ">View</div></Link>
     
      </div>
      </div>
    )
  })
  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">Snippets</h1>

        <Link href={"/snippets/new"} className="border p-2 border-rounded hover:bg-green-400 
        transition-all hover:text-white">Create New</Link>
      </div>
      <div className="flex gap-2 flex-col"> {renderedSnippets} </div>
   
      </div>
  );
}
