import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavLinks({ navLinks, navEvent }) {
  const pathname = usePathname()
  
  return (
    <>
      {navLinks.map((link) => {
        return <Link href={link.path} key={link.title} className={pathname === link.path ? "nav-active" : ""} onClick={navEvent ? navEvent : ""}>{link.title}</Link> 
      })}
    </>
  )
}
