import { createClient } from "contentful"

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

// const query = { content_type: "about", "sys.id": "5gqeuG7ZitiSN7RjWIWrQW" }
export const fetchClientEntries = async (query: Object) => {
  const response = await client.getEntries(query)

  return response
}
