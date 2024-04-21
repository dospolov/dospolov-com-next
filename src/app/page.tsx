import React from "react"
import request from "@/lib/request"
import getAllPostsQuery from "@/queries/allPosts"
import FeaturedAnnounce from "@/components/featured-announce"
import PlainAnnounce from "@/components/plain-announce"
import Announce from "@/components/announce"
import { Post } from "@/types"

export default async function Home() {
  const parsedResponse = await request(getAllPostsQuery())
  const posts = parsedResponse.data.allPosts ?? []

  const featuredPosts = posts.filter((post: Post) => post.featured)
  const plainPosts = posts.filter((post: Post) => !post.featured)

  return (
    <section className="relative max-w-6xl mx-auto py-10 px-4 sm:px-6 space-y-10">
      {featuredPosts.map((post: Post) => (
        <FeaturedAnnounce slug={post.slug} key={post.slug}>
          <Announce post={post} />
        </FeaturedAnnounce>
      ))}
      {plainPosts.map((post: Post) => (
        <PlainAnnounce slug={post.slug} key={post.slug}>
          <Announce post={post} />
        </PlainAnnounce>
      ))}
    </section>
  )
}
