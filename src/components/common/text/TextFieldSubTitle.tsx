import { TextFiledType } from '@/types/common'
import React from 'react'

export default function TextFieldSubTitle(props: TextFiledType) {
  const { text } = props

  return <p className="text-[1rem] font-semibold text-primary-700">{text}</p>
}
