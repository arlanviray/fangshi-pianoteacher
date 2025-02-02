export default function MetaData({ title, description }) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Arlan Viray, arlan.viray@gmail.com" />
    </>
  )
}
