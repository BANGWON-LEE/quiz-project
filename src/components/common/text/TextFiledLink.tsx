import { TextFiledType, TextFiledLinkType } from '@/types/common'
import Link from 'next/link'
import React from 'react'

export default function TextFieldLink(props: TextFiledLinkType) {
  const { text, move } = props

  return (
    <Link href={move}>
      <p className="text-xl font-semibold text-primary-700">{text}</p>
    </Link>
  )
}
