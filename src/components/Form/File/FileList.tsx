'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'

import { useFileRoot } from './FileRoot'
import { FileItem } from './FileItem'

export function FileList() {
  const { files } = useFileRoot()
  const [parent] = useAutoAnimate()

  return (
    <div className="mt-4 space-y-3" ref={parent}>
      {files.map((file) => {
        return <FileItem name={file.name} size={file.size} key={file.name} />
      })}
    </div>
  )
}
