"use client";
import { Editor } from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import { useState } from "react";
import * as actions from "../actions/serveraction";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
interface SnippetEditPage {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditPage) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

  return (
    <div>
      <div>
        <Link href={`/snippets/${snippet.id}`}>
          {" "}
          <IoIosArrowBack className="text-3xl p-1 hover:bg-black hover:text-white m-2 rounded-full "></IoIosArrowBack>
        </Link>
      </div>
      <Editor
        height="60vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      ></Editor>
      <form action={editSnippetAction}>
        <button
          type="submit"
          className="p-2 border rounded hover:bg-green-400 transition-all duration-150 hover:text-white"
        >
          Save
        </button>
      </form>
    </div>
  );
}
