import { ComponentProps } from 'react'

type TextAreaType = ComponentProps<'textarea'>

export function TextArea(props: TextAreaType) {
  return (
    <textarea
      {...props}
      className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none"
    ></textarea>
  )
}
