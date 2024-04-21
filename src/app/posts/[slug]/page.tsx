import React from "react"
import request from "@/lib/request"
import getPostQuery from "@/queries/post"
import Date from "@/components/date"
import Image from "@/components/image"
import Video from "@/components/video"
import Comments from "@/components/comments"
import Content from "@/components/content"
import type { Metadata } from "next"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const {
    data: { post },
  } = await request(getPostQuery({ slug: params.slug }))

  return {
    title: `${post.title} - Dospolov Blog`,
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const {
    data: { post },
  } = await request(getPostQuery({ slug: params.slug }))

  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
          {post.title}
        </h1>
        {post.excerpt && (
          <p className="text-xl leading-relaxed mb-4">{post.excerpt}</p>
        )}
        <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
          {post.coverVideo && <Video video={post.coverVideo} />}
          {post.coverImage && (
            <Image image={post.coverImage} alt={post.coverImage.alt} />
          )}
        </div>
        <div className="max-w-2xl mx-auto">
          <Content content={post.content} />

          <div className="max-w-2xl mx-auto mb-6 text-lg">
            <Date dateString={post.date} />
          </div>
        </div>
        <Comments title={post.title} slug={post.slug} />
      </div>
    </div>
  )
}
