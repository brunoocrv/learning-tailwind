'use client'

import { ChevronDown } from 'lucide-react'
import * as Select from '@radix-ui/react-select'
import { ReactNode } from 'react'

type SelectRootType = {
  children: ReactNode
  placeholder?: string
} & Select.SelectProps

export function SelectRoot({
  children,
  placeholder = '',
  ...props
}: SelectRootType) {
  return (
    <Select.Root {...props}>
      <Select.Trigger
        className="
          flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100 data-[placeholder]:text-zinc-500
        dark:border-zinc-700 dark:bg-zinc-700 dark:text-zinc-100 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20 dark:data-[placeholder]:text-zinc-400
        "
      >
        <Select.Value className="text-black" placeholder={placeholder} />
        <Select.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 w-[--radix-select-trigger-width] animate-slideDownAndFade cursor-pointer overflow-hidden rounded-lg border border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-800"
        >
          <Select.Viewport>{children}</Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
