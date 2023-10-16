import Link from "next/link";
import { usePathname } from "next/navigation";
// library
import _ from "lodash"

export default function NavLinks({ navLinks, navEvent }) {
  const pathname = usePathname()
  
  return (
    <>
      {_.map(navLinks, (link) => {
        return <Link href={link.path} key={link.title} className={pathname === link.path ? "nav-active" : ""} onClick={navEvent ? navEvent : ""}>{link.title}</Link>
      })}
    </>
  )
}
