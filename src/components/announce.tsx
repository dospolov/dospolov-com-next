import Video from "./video"
import Image from "./image"
import Tags from "./tags"
import Date from "./date"
import { Post } from "../types"

const Announce = ({ post }: { post: Post }) => {
  return (
    <>
      {post.coverVideo && (
        <Video
          video={post.coverVideo}
          className="hover:shadow-medium transition-shadow duration-200"
        />
      )}
      {post.coverImage && (
        <Image
          alt={post.coverImage.alt}
          image={post.coverImage}
          className="hover:shadow-medium transition-shadow duration-200"
        />
      )}
      {!post.coverVideo && !post.coverImage && <div>{/* empty column */}</div>}
      <div>
        <header>
          <div className="mb-3">
            <Tags tags={post.tags} featured={post.featured} />
          </div>
          <h3 className="text-2xl lg:text-3xl mb-2 hover:text-gray-100 transition duration-150 ease-in-out">
            {post.title}
          </h3>
        </header>
        {post.excerpt && (
          <p className="text-lg text-gray-400 flex-grow">{post.excerpt}</p>
        )}
        {post.featured || (
          <footer className="flex items-center mt-4">
            <Date dateString={post.date} />
          </footer>
        )}
      </div>
    </>
  )
}

export default Announce
