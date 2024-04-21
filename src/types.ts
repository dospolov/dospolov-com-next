import { ResponsiveImageType } from "react-datocms"

export type Video = {
  url: string
  video: {
    thumbnailUrl: string
  }
}

export type Image = {
  alt: string
  responsiveImage: ResponsiveImageType
}

export type Post = {
  featured: boolean
  slug: string
  title: string
  coverVideo?: Video
  coverImage?: Image
  tags: string
  excerpt: string
  date: string
}

export type Record = {
  __typename: string
  image: Image
}
