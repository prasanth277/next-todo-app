import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

async function createTodo(data: FormData) {
  "use server";
  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid todo");
  }
  await prisma.todo.create({ data: { title, complete: false } });
  redirect("/");
}

export default function AddNewTodo() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New</h1>
      </header>
      <form action={createTodo}>
        <input
          type="text"
          name="title"
          className="border border-white-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-white-100"
        />
        <div className="flex gap-1 justify-start m-4">
          <Link
            href=".."
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}
