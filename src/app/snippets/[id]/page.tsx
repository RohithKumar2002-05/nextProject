// 'use client';
// We should not use client in server side components
import { notFound } from "next/navigation";
import { db } from "@/db";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import * as actions from '@/actions/serveraction';

interface SnippetShowPageProps {
    params: Promise <{ id: string }>;
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
    const val =  (await props.params).id;
    const snippetId = parseInt(val);
    const snippet = await db.snippet.findFirst({
        where: { id: snippetId }
    });

    if (!snippet) {
        return notFound();
    }

    const deleteRecord = actions.deleteSnippet.bind(null,snippetId)
    if(!snippet){
        return notFound();
    }
    return (
        <div>
            <div className="flex m-4 justify-between item-center">
                <div className="hover:bg-black w-10 h-10 hover:text-white rounded-full border-none p-1  hover:text-4">
                    <Link href={'/'}><IoIosArrowBack className="text-3xl rounded-full  "></IoIosArrowBack></Link>
                </div>
                <h1 className="text-5xl font-bold text-cyan-300">{snippet.title}</h1>
                <div className="flex gap-4">
                    <Link href={`/snippets/${snippet.id}/edit`} className="p-2 border rounded hover:bg-slate-600 hover:text-white">Edit</Link>
                    <form action= {deleteRecord}>
                        <button type="submit" className="p-2 border rounded hover:bg-red-600 hover:text-white cursor-pointer">Delete</button>
                    </form>
                </div>
            </div>
            <pre className="p-3 border rounded bg-gray-200 border-gray-200">
                <code>{snippet.code}</code>
            </pre>
        </div>
    );
}