"use client";
import LogoFiled from "@/components/common/text/LogoField";
import React from "react";
import menuArr from "../../../data/menu.json";
import TextFieldTitle from "@/components/common/text/TextFieldTitle";

export default function Header() {
  return (
    <header className="w-full h-16">
      <div className="w-[100rem] mx-auto">
        <LogoFiled />
        <div className="flex justify-evenly">
          <div></div>
          {menuArr.menu.map((el) => (
            <div key={el.title}>
              <TextFieldTitle text={el.title} />
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
