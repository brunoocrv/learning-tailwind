'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

type FileRootPropsType = ComponentProps<'div'>

type FileRootContextType = {
  id: string
  files: File[]
  handleSetFiles: (files: File[], multiple: boolean) => void
  onRemoveFile: (fileName: string) => void
}

const FileRootContext = createContext({} as FileRootContextType)

export function FileRoot(props: FileRootPropsType) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  const handleSetFiles = (files: File[], multiple: boolean) => {
    if (multiple) {
      setFiles((state) => [...state, ...files])
    } else setFiles(files)
  }

  const onRemoveFile = (fileName: string) => {
    const setCurrentFiles = files.filter((file) => file.name !== fileName)

    setFiles(setCurrentFiles)
  }

  return (
    <FileRootContext.Provider
      value={{ id, files, handleSetFiles, onRemoveFile }}
    >
      <div {...props} />
    </FileRootContext.Provider>
  )
}

export const useFileRoot = () => useContext(FileRootContext)
