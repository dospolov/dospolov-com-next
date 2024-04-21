import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments"

const getAllPagesQuery = () => ({
  query: `
  {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    blog {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
    }
    allPages(orderBy: date_DESC, first: 20) {
      title
      slug
      date
    }
  }

  ${metaTagsFragment}
`,
})

export default getAllPagesQuery
