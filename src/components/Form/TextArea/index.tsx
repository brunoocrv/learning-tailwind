import { ComponentProps } from 'react'

type TextAreaType = ComponentProps<'textarea'>

export function TextArea(props: TextAreaType) {
  return (
    <textarea
      {...props}
      className="
        min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100
        dark:border-zinc-700 dark:bg-zinc-700 dark:text-zinc-100 dark:placeholder-zinc-400 dark:focus:border-violet-500 dark:focus:ring-violet-500/20
      "
    ></textarea>
  )
}
