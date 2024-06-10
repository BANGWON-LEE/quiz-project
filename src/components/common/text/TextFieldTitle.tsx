"use client";
import { TextFiledType } from "@/types/common";
import React from "react";

export default function TextFieldTitle(props: TextFiledType) {
  const { text } = props;

  return <h2 className="text-[1.50rem] font-bold text-primary-200">{text}</h2>;
}

// export default TextFieldTitle;
