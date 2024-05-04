'use client'

import { ProjectConnectionQuery } from "@/tina/__generated__/types"
import Link from "next/link"
import { useTina } from "tinacms/dist/react"

export function ProjectListPageComponent(props: {
    data:ProjectConnectionQuery
    variables: { 
        
    }
    query:string
    })  {
    const { data } = useTina(props)

    const ProjectList=data.projectConnection.edges

    return(
        <div>
            <h1>Blog</h1>
            {ProjectList?.map((Project:any) => (
                <div key={Project.node.id}>
                    <Link href={`Projects/${Project.node._sys.filename}`}>
                        {Project.node.title}
                    </Link>
                </div>
            ))}
        </div>
    )
}