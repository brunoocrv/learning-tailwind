import { ComponentProps } from 'react'

type TextfieldPrefixType = ComponentProps<'div'>

export function TextfieldPrefix(props: TextfieldPrefixType) {
  return <div {...props} />
}
