import { db } from "@/db";
import Link from "next/link";

const Home = async () => {
  const snippets = await db.snippet.findMany();
  // rendering
  const renderedSnippets = snippets.map((snippet) => {
    return (
      <div
        className="flex justify-between py-5 border border-red-200 px-3 rounded"
        key={snippet.id}
      >
        <div>{snippet.title}</div>
        <div>
          <Link href={`/snippets/${snippet.id}`}>
            <button>view</button>
          </Link>
        </div>
      </div>
    );
  });
  return (
    <div className="flex justify-center items-center mt-5">
      <div className="w-[40%]">
        <div className="flex justify-between py-3 px-3">
          <h3>List of snippets</h3>
          <Link href={`/snippets/new`} className="font-bold text-red-600">
            New
          </Link>
        </div>
        {renderedSnippets}
      </div>
    </div>
  );
};
export default Home;
