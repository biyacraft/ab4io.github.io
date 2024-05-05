
import { PostListPageComponent } from "@/components/app/posts/post-list-page";
import client from "@/tina/__generated__/client";
import React from "react"
export default async function PostListPage({ params, }: {
params: { slug: string } }) {
    const result = await client.queries
    .postConnection()


    return <PostListPageComponent {...result} />
  }
