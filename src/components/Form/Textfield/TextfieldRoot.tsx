import { ComponentProps } from 'react'

type TextfieldRootType = ComponentProps<'div'>

export function TextfieldRoot(props: TextfieldRootType) {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100"
      {...props}
    />
  )
}
