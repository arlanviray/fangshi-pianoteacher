import { createClient } from "contentful"

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export const clientData = async (content: string, id: string) => {
  const response = await client.getEntries({
    content_type: content,
    "sys.id": id ? id : "",
  })

  return response
}
