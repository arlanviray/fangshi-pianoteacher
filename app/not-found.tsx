import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <section>
        <div className="content text-center">
          <h3 className="text-2xl font-semibold text-primary">There was a problem!</h3>
          <p>We could not find the page you were looking for.</p>
          <p>Go back to the <Link href="/" className="underline">homepage</Link>.</p>
        </div>
      </section>
    </>
  )
}
