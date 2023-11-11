/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from "swr"

// const queryParam = content_type=about&sys.id=5gqeuG7ZitiSN7RjWIWrQW
export const fetchDataSWR = (queryParam: string, fallbackData: any) => {
  const { data, error, isLoading } = useSWR(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&${queryParam}`,
    (url: RequestInfo | URL) => fetch(url).then((res) => res.json()),
    fallbackData && { fallbackData },
  )

  return {
    data,
    error,
    isLoading,
  }
}
