'use client'

import { PostConnectionQuery } from "@/tina/__generated__/types"
import Link from "next/link"
import { useTina } from "tinacms/dist/react"

export function PostListPageComponent(props: {
    data:PostConnectionQuery
    variables: { 
        
    }
    query:string
    })  {
    const { data } = useTina(props)

    const postList=data.postConnection.edges

    return(
        <div>
            <h1>Blog</h1>
            {postList?.map((post:any) => (
                <div key={post.node.id}>
                    <Link href={`posts/${post.node._sys.filename}`}>
                        {post.node.title}
                    </Link>
                </div>
            ))}
        </div>
    )
}
