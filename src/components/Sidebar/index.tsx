'use client'

import { Cog, LifeBuoy, Menu, Search } from 'lucide-react'
import Image from 'next/image'
import * as Collapsible from '@radix-ui/react-collapsible'

import logo from 'public/logo.svg'

import { MainNavigation } from './MainNavigation'
import { NavItems } from './NavItems'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from '../Profile'
import {
  TextfieldRoot,
  TextfieldControl,
  TextfieldPrefix,
} from '../Form/Textfield'
import { Button } from '../Button'

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 data-[state=open]:h-screen lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 lg:data-[state=closed]:h-screen">
      <div className="flex items-center justify-between">
        <strong className="flex items-center gap-2 text-xl font-semibold text-zinc-900">
          <Image src={logo} alt="" />
          <span>Untitled UI</span>
        </strong>
        <Collapsible.Trigger className="lg:hidden" asChild>
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
        forceMount
      >
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
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
