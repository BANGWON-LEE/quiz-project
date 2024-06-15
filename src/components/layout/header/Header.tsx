'use client'
import LogoFiled from '@/components/common/text/LogoField'
import React, { Fragment } from 'react'
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
        <div className="flex justify-around w-full pt-[3.4rem]">
          {menuArr.menu.map((el, index) => (
            <Fragment key={'menuIndex' + index}>
              <div className="grid items-baseline text-center h-auto w-[15rem] ">
                <div key={el.title}>
                  <TextFieldTitle text={el.title} />
                </div>
                <div className="relative w-auto min-h-11">
                  <div className="w-[15rem] grid items-center absolute">
                    {el.subMenu.map((sub, subIndex) => (
                      <div className="mx-auto" key={el.subMenu + '' + index}>
                        {sub}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Fragment>
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
