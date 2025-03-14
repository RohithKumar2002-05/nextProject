'use client';


import { useActionState } from "react";
import * as actions from '@/actions/serveraction'
export default function SnippetCreatePage(){
 

 const [formstate, action] = useActionState(actions.createSnippet,{message:' '});
    
    return(
<form action={action}>


    <h3 className="font-bold m-3">Create a Snippet</h3>

    <div className="flex flex-col gap-4">

        <div className="flex gap-4">
            <label className="w-12" htmlFor="title">Title</label>
            <textarea name="title" className="border rounded p-2 w-full" id="title" />
        </div>

       
        <div className="flex gap-4">
            <label className="w-12" htmlFor="code">Code:</label>
            <textarea name="code" className="border rounded p-2 w-full" id="code" />
        </div>

            {
                formstate.message !== " "? <div className="my-2   p-2 text-center bg-red-400  border rounded text-white border-red-700 cursor-not-allowed">{formstate.message}</div>: null
            }
     
        <button type="submit" className="rounded p-2 bg-blue-200 hover:bg-blue-600 hover:text-white">Create</button>
    </div>
</form>
    )
}