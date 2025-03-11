'use server';
import { db } from "@/db";
import { redirect } from "next/navigation";
export async function editSnippet(id:number ,code:string){

            await db.snippet.update({
                where :{id},
                data :{code}
            });

                redirect(`/snippets/${id}`);
};

//delete a record
export async function deleteSnippet(id:number){
   await db.snippet.delete({
    where:{id}
   })
   console.log('Record Deleted Successfully!')
    redirect('/')

  
}


export async function createSnippet(formState:{message:string} ,formData:FormData ){
   
       
    //Check the user input
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;
    if(title === '' && code === ''){
        return{
            message:'Both fields should be filled'
        }
    }
    if(code.length<10 && title.length<3 ){
        return{
            message:'Both Title and Code must be longer'
        };

    };
    if(typeof title !== 'string' || title.length<3 ){
        return{
            message:'Title must be longer'
        };

    };

    if(typeof code!== 'string' || code.length <10){
        return{
            message:'Code must be longer'
        }
    }
  
    //Create a new record in database
        await db.snippet.create({
            data:{
                title,
                code
            },
        });
      

    //Redirect

    redirect('/')


    
};




