"use client";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import React, { useState } from "react";

const fontMap = {
  arial: "font-arial",
  inter: "font-inter",
  manrope: "font-manrope",
  poppins: "font-poppins",
};

const FontWrapper = ({ children }: { children: React.ReactNode }) => {
  const font = useAppSelector((state: RootState) => state.appearanceStore.font);

  return <div className={`${fontMap[font]}`}>{children}</div>;
};

export default FontWrapper;
