import * as actions from "@/actions";
import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}
const SnippetShowPage = async (props: SnippetShowPageProps) => {
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });
  if (!snippet) {
    return notFound();
  }

  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);
  return (
    <div className="">
      <div className="flex justify-center items-center w-[80%]">
        <div className="flex m-4 justify-between items-center">
          <h1 className="text-xl font-bold">{snippet.title}</h1>
          <div className="flex gap-4">
            <Link
              className="p-2 ml-3 border rounded"
              href={`/snippets/${snippet.id}/edit`}
            >
              Edit
            </Link>

            <form action={deleteSnippetAction}>
              <button className="p-2 border rounded">Delete</button>
            </form>
          </div>
        </div>
      </div>

      <pre className="p-3 w-[80%] border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
      <Link href={`/`}>
        <button className="p-3 border border-green-400 rounded-md mt-3">
          Go to home
        </button>
      </Link>
    </div>
  );
};
export default SnippetShowPage;
