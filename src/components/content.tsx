import React from "react"
import { StructuredText, SRCImage } from "react-datocms"
import Video from "./video"
import {
  StructuredTextDocument,
  StructuredTextGraphQlResponseRecord,
} from "react-datocms"
import { Image as ImageType, Video as VideoType } from "@/types"

const Content = ({ content }: { content: StructuredTextDocument }) => {
  return (
    <div className="prose prose-lg prose-blue post-content prose-invert">
      <StructuredText
        {...{
          data: content,
          renderBlock: ({
            record,
          }: {
            record: StructuredTextGraphQlResponseRecord & {
              image: ImageType
              video: VideoType
            }
          }) => {
            if (record.__typename === "ImageBlockRecord") {
              return (
                <SRCImage
                  {...{ lazyLoad: false, data: record.image.responsiveImage }}
                />
              )
            }
            if (record.__typename === "VideoBlockRecord") {
              return <Video {...{ video: record.video }} />
            }

            return (
              <>
                <p>Don&apos;t know how to render a block!</p>
                <pre>{JSON.stringify(record, null, 2)}</pre>
              </>
            )
          },
        }}
      />
    </div>
  )
}

export default Content
