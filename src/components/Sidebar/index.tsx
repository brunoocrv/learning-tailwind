import { Cog, LifeBuoy, Search } from 'lucide-react'
import Image from 'next/image'

import logo from 'public/logo.svg'
import { MainNavigation } from './MainNavigation'
import { NavItems } from './NavItems'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from '../Profile'
import { TextfieldRoot, TextfieldControl, TextfieldPrefix } from '../Textfield'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <strong className="flex items-center gap-2 text-xl font-semibold text-zinc-900">
        <Image src={logo} alt="" />
        <span>Untitled UI</span>
      </strong>

      {/* Composition Pattern */}
      <TextfieldRoot>
        <TextfieldPrefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </TextfieldPrefix>
        <TextfieldControl placeholder="Search" />
      </TextfieldRoot>
      <MainNavigation />
      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItems title="Support" icon={LifeBuoy} />
          <NavItems title="Settings" icon={Cog} />
        </nav>
        <UsedSpaceWidget />
        <Profile />
      </div>
    </aside>
  )
}
