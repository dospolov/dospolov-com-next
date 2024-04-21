import React from "react"
import request from "@/lib/request"
import getPageQuery from "@/queries/page"
import getAllPagesQuery from "@/queries/allPages"
import Date from "@/components/date"
import Image from "@/components/image"
import Video from "@/components/video"
import Content from "@/components/content"
import { Metadata } from "next"
import { Post } from "@/types"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const {
    data: {
      page: { title },
    },
  } = await request(getPageQuery({ slug: params.slug }))

  return {
    title: `${title} - Dospolov Blog`,
  }
}

export async function generateStaticParams() {
  const parsedResponse = await request(getAllPagesQuery())
  const pages = parsedResponse.data.allPages ?? []

  return pages.map((page: Post) => ({
    slug: page.slug,
  }))
}

export default async function Page({ params }: { params: { slug: string } }) {
  const {
    data: {
      page: { title, excerpt, coverVideo, coverImage, content, slug, date },
    },
  } = await request(getPageQuery({ slug: params.slug }))

  return (
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
          {title}
        </h1>
        {excerpt && <p className="text-xl leading-relaxed mb-4">{excerpt}</p>}
        <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
          {coverVideo && <Video video={coverVideo} />}
          {coverImage && <Image image={coverImage} alt={coverImage.alt} />}
        </div>
        <div className="max-w-2xl mx-auto">
          <Content content={content} />

          <div className="max-w-2xl mx-auto mb-6 text-lg">
            <Date dateString={date} />
          </div>
        </div>
      </div>
    </div>
  )
}
