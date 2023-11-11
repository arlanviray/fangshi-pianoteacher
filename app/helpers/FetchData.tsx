// const queryParam = content_type=about&sys.id=5gqeuG7ZitiSN7RjWIWrQW
export const fetchData = async (queryParam: string) => {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&${queryParam}`,
  )

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

// Use case for prefetch initial data with getServerSideProps()
/*
export default function Index({ initialData  }) {
  const data = fetchDataSWR("content_type=about&sys.id=5gqeuG7ZitiSN7RjWIWrQW", initialData)

  return (
    <>
      <h1>{data.title}</h1>
    </>
  );
}

export async function getServerSideProps() {
  const initialData = await fetchData("content_type=about&sys.id=5gqeuG7ZitiSN7RjWIWrQW")
  return {
    props: {
      initialData,
    },
  };
}
*/
