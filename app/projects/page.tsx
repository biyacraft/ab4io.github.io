
import { ProjectListPageComponent } from "@/components/app/projects/project-list-page";
import client from "@/tina/__generated__/client";
import React from "react"
export default async function ProjectListPage({ params, }: {
params: { slug: string } }) {
    const result = await client.queries
    .projectConnection()


    return <ProjectListPageComponent {...result} />
  }
