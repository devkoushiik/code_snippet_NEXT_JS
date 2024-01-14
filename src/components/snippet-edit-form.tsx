"use client";
import * as actions from "@/actions";
import { Editor } from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import Link from "next/link";
import { useState } from "react";

interface SnippetEditFormProps {
  snippet: Snippet;
}

const SnippetEditForm = ({ snippet }: SnippetEditFormProps) => {
  const [code, setCode] = useState(snippet.code);
  // grabbing editor changing value
  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };
  // editSnippetActions
  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

  return (
    <div className="mt-4">
      <Editor
        width={"70%"}
        height={"30vh"}
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      <div className="grid grid-cols-2 mt-3">
        <form action={editSnippetAction}>
          <button
            className="p-2 mt-3 border border-red-400 rounded"
            type="submit"
          >
            Update
          </button>
        </form>
        <div>
          <Link href={`/`}>
            <button className="p-3 border border-green-400 rounded-md mt-3">
              Go to home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SnippetEditForm;
