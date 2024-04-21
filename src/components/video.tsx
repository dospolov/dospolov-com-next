import React from "react"
import { cn } from "@/lib/utils"
import { Video as VideoType } from "@/types"

const Video = ({
  video,
  className = "",
}: {
  video: VideoType
  className?: React.HTMLProps<HTMLElement>["className"]
}) => {
  return (
    <video
      src={video.url}
      preload="auto"
      muted
      autoPlay
      playsInline
      loop
      className={cn("relative shadow-small max-h-svh", className)}
      poster={video.video.thumbnailUrl}
    />
  )
}

export default Video
