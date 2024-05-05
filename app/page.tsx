import { HomePageComponent } from "@/components/app/home-page"
import client from "@/tina/__generated__/client"


export default async function HomePage(){
  const result = await client.queries.homePage()

  return <HomePageComponent {...result} />
  }

  