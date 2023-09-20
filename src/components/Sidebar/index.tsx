import { Search } from 'lucide-react'
import Image from 'next/image'

import logo from 'public/logo.svg'

export function Sidebar() {
  return (
    <aside className="border-r border-zinc-200 px-5 py-8">
      <strong className="flex items-center gap-2 text-xl font-semibold text-zinc-900">
        <Image src={logo} alt="" />
        <span>Untitled UI</span>
      </strong>

      <div className="mt-4 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <Search className="h-5 w-5 text-zinc-500" />
        <input
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"
          type="text"
          placeholder="Search"
        />
      </div>
    </aside>
  )
}
