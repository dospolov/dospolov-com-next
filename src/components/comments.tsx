"use client"

import React from "react"
import { DiscussionEmbed } from "disqus-react"

const Comments = ({ title, slug }: { title: string; slug: string }) => {
  const disqusProps = {
    shortname: "dospolov",
    config: {
      identifier: title,
      title,
      url: `{process.env.NEXT_PUBLIC_SITE_URL}/posts/${slug}`,
    },
  }

  return (
    <div className="my-8">
      <DiscussionEmbed {...disqusProps} />
    </div>
  )
}

export default Comments
