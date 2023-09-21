import { ComponentProps } from 'react'

type TextfieldRootType = ComponentProps<'div'>

export function TextfieldRoot(props: TextfieldRootType) {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}
