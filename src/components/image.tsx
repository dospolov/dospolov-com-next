import React from "react"
import { SRCImage } from "react-datocms"
import { cn } from "@/lib/utils"
import { Image as ImageType } from "@/types"

const Image = ({
  image,
  alt,
  className = "",
}: {
  image: ImageType
  alt: string
  className?: React.HTMLProps<HTMLElement>["className"]
}) => {
  return (
    <SRCImage
      data={{ ...image.responsiveImage, alt }}
      className={cn("relative shadow-small max-h-svh", className)}
    />
  )
}

export default Image
