"use client";

import Link from "next/link";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
};
export function TodoItem({
  id,
  title,
  complete,
  toggleTodo,
  deleteTodo,
}: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center m-5">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label htmlFor={id} className="peer-checked:line-through">
        {title}
      </label>
      <Link
        href=".."
        className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700"
        onClick={(e) => deleteTodo(id)}
      >
        X
      </Link>
    </li>
  );
}
