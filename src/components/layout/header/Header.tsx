'use client'
import LogoFiled from '@/components/common/text/LogoField'
import React from 'react'
import menuArr from '../../../data/menu.json'
import TextFieldTitle from '@/components/common/text/TextFieldTitle'
import TextFieldLink from '@/components/common/text/TextFiledLink'

export default function Header() {
  return (
    <header className="w-full h-16">
      <div className="w-[100rem] mx-auto flex items-center">
        <div>
          <LogoFiled />
        </div>
        <div className="flex justify-around w-[80rem]">
          {menuArr.menu.map((el) => (
            <div key={el.title}>
              <TextFieldTitle text={el.title} />
            </div>
          ))}
        </div>
        <div className="flex w-[11rem] justify-between">
          <div>
            <TextFieldLink text={'로그인'} move={'#'} />
          </div>
          <div>|</div>
          <div>
            <TextFieldLink text={'회원가입'} move={'#'} />
          </div>
        </div>
      </div>
    </header>
  )
}
