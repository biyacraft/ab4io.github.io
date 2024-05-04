
import { ProjectListPageComponent } from "@/components/app/projects/project-list-page";
import client from "@/tina/__generated__/client";
import { notFound } from "next/navigation";

export default async function ProjectPage({ params, }: {
params: { slug: string } }) {
    const result = await client.queries
    .project({ relativePath: `${params.slug}.mdx` })
    .then((result) =>{
       return result
      })
    .catch((err) =>{
        console.error(err)
        return notFound()
    })
    return <ProjectListPageComponent {...result} />
  }
