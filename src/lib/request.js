const request = async (query) => {
  const response = await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
    },
    body: JSON.stringify(query),
  })
  const parsedResponse = await response.json()

  return parsedResponse
}

export default request
