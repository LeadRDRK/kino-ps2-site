import { error } from "@sveltejs/kit";
import type { Component } from "svelte";

export const prerender = true;

export async function entries() {
  const modules = import.meta.glob('$lib/posts/*.svx');
  return Object.keys(modules).map((path) => ({
    slug: path.split('/').pop()!.replace('.svx', '')
  }));
}

export async function load({ params }) {
  try {
    const post = await import(`$lib/posts/${params.slug}.svx`);
    const metadata = post.metadata as Record<string, any>;
    return {
      content: post.default as Component,
      metadata,
      title: metadata.title
    };
  } catch {
    throw error(404, "Post not found");
  }
}