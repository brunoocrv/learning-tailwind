'use client'

import { Trash, UploadCloud } from 'lucide-react'

import { Button } from '@/components/Button'

import { useFileRoot } from './FileRoot'

import { convertBytes } from '@/utils/convertBytes'

type FileItemType = {
  name: string
  size: number
}

export function FileItem({ name, size }: FileItemType) {
  const { onRemoveFile } = useFileRoot()
  return (
    <div className="group flex items-center gap-4 rounded-lg border border-zinc-200 p-4">
      <div className="rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600">
        <UploadCloud className="h-4 w-4" />
      </div>

      <div className="flex flex-1 flex-col items-start gap-1">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-zinc-700">{name}</span>
          <span className="text-sm text-zinc-500">{convertBytes(size)}</span>
        </div>

        <div className="flex w-full items-center gap-3">
          <div className="h-2 flex-1 rounded-full bg-violet-100">
            <div className="h-2 w-4/5 rounded-full bg-violet-600" />
          </div>
          <span className="text-sm font-medium text-zinc-700">80%</span>
        </div>
      </div>
      <Button type="button" variant="ghost" onClick={() => onRemoveFile(name)}>
        <Trash className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
