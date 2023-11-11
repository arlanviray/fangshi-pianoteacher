/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from "swr"
import { request } from "graphql-request"

const query = `query { about (id:"5gqeuG7ZitiSN7RjWIWrQW") { items { title } } }`
export const fetchGraphQL = (query: string) => {
  const { data, error, isLoading } = useSWR(query, (query) =>
    request(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      query,
    ),
  )

  return {
    data,
    error,
    isLoading,
  }
}
