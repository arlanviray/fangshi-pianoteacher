export const GraphQL = async (query: string) => {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 60 },
    },
  ).then((response) => response.json())
}
// Query example
// const graphqlQuery = `{
//   about(id: "5gqeuG7ZitiSN7RjWIWrQW") {
//     header
//     description {
//       json
//     }
//   },
// }`
