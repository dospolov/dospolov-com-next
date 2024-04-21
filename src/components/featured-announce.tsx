import React from "react"
import FeaturedAnnounceBg from "./backgrounds/featured-announce"
import Link from "next/link"

const FeaturedAnnounce = ({
  slug,
  children,
}: {
  slug: string
  children: React.ReactNode
}) => {
  return (
    <Link href={`/posts/${slug}`} className="block mb-8 md:mb-12 group">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-gray-700 py-10 px-8 md:py-16 md:px-12 group-hover:bg-purple-900">
          <div
            className="absolute right-0 top-0 -ml-40 pointer-events-none"
            aria-hidden="true"
          >
            <FeaturedAnnounceBg />
          </div>

          <div className="relative flex flex-col lg:flex-row justify-between items-center">
            <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
              {children}
            </article>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default FeaturedAnnounce
