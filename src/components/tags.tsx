import React from "react"

const Tags = ({ tags, featured }: { tags: string; featured: boolean }) => {
  return (
    <ul className="flex flex-wrap text-xs font-medium -m-1">
      {tags?.split(", ").map((tag) => (
        <li className="m-1" key={tag}>
          <span
            className={`inline-flex text-center py-1 px-3 rounded-full transition duration-150 ease-in-out ${
              featured
                ? "text-gray-600 bg-gray-100"
                : "text-gray-100 bg-gray-600"
            }`}
          >
            {tag}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default Tags
