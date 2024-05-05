'use client'

import { LinkCard } from "@/components/Linkcard"
import { ProjectConnectionQuery } from "@/tina/__generated__/types"
import { ArrowDownFromLine } from "lucide-react"
import Link from "next/link"
import { useTina } from "tinacms/dist/react"

export function ProjectListPageComponent(props: {
    data:ProjectConnectionQuery
    variables: { 
    }
    query:string
    })  {
    const { data } = useTina(props)

    const projectList=data.projectConnection.edges

    return(
        <>
        <h1>My Projects</h1>
        <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 lg:mx-0">
            <div className="grid grid-cols-1 gap-4">
            {projectList?.filter((_:any, i:number) => i%3===0)
            .map((project:any) => (
                <LinkCard
                key={project.node.id}
                link={project.node.link}
                title={project.node.title}
                description={project.node.description}
                />
            ))}
            </div>
            <div className="grid grid-cols-1 gap-4">
            {projectList?.filter((_:any, i:number) => i%3===1)
            .map((project:any) => (
                <LinkCard
                key={project.node.id}
                link={project.node.link}
                title={project.node.title}
                description={project.node.description}
                />
            ))}
            </div>
            <div className="grid grid-cols-1 gap-4">
            {projectList?.filter((_:any, i:number) => i%3===2)
            .map((project:any) => (
                <LinkCard
                key={project.node.id}
                link={project.node.link}
                title={project.node.title}
                description={project.node.description}
                />
            ))}
            </div>
        </div>
        </>
    )
}
