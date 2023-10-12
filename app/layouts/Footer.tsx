/* eslint-disable @next/next/no-img-element */

export default function Footer() {
  const now = new Date()
  
  return (
    <footer className="bg-bgLight sm:flex sm:items-center sm:justify-between sm:flex-row-reverse px-4 py-2">
      <div className="max-sm:pb-2">
        <img src="/fangshi_icon.png" alt="FangShi logo footer" className="max-w-none h-7 mx-auto" />
      </div>
      <div className="text-xs text-center whitespace-nowrap">&copy; Copyright {now.getFullYear()}. All right reserved.</div>
    </footer>
  )
}
