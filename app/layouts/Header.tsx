/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed w-full bg-bgLight border-secondary border-b-2 px-4 pt-2 pb-3">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/"><img src="/fangshi_logo.png" alt="FangShi logo header" className="max-w-none h-12" /></Link>
        </div>
        <div>
          <Link href="/">Home</Link> | 
          <Link href="/about">About me</Link> | 
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </header>
  )
}
