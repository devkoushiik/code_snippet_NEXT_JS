"use server";

import { db } from "@/db";

import { redirect } from "next/navigation";

export const editSnippet = async (id: number, code: string) => {
  await db.snippet.update({
    where: { id },
    data: { code },
  });
  redirect(`/snippets/${id}`);
};

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });
  redirect("/");
}
