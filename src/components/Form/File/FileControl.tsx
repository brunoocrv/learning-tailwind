'use client'

import { ChangeEvent, ComponentProps } from 'react'

import { useFileRoot } from './FileRoot'

type FileControlType = ComponentProps<'input'>

export function FileControl({ multiple = false, ...props }: FileControlType) {
  const { id, handleSetFiles } = useFileRoot()

  const onFileSelected = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) return

    const files = Array.from(event.target.files)

    handleSetFiles(files, multiple)
  }

  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      multiple={multiple}
      onChange={(event) => onFileSelected(event)}
      {...props}
    />
  )
}
