/* eslint-disable @next/next/no-img-element */

export default function Footer() {
  const now = new Date()

  return (
    <footer className="bg-light px-4 py-2">
      <div className="sm:flex sm:flex-row-reverse sm:items-center sm:justify-between">
        <div className="max-sm:pb-2">
          <img
            src="/fangshi_icon.png"
            alt="FangShi logo footer"
            className="mx-auto h-7 max-w-none"
          />
        </div>
        <div className="whitespace-nowrap text-center text-xs">
          &copy; Copyright {now.getFullYear()}. All right reserved.
        </div>
      </div>
    </footer>
  )
}
