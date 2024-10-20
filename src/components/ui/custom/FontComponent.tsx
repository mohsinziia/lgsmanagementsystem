"use client";
import { Font, fontClasses } from "@/lib/appearanceSlice";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import React, { useEffect } from "react";

const FontComponent = () => {
  const { font } = useAppSelector((state: RootState) => state.appearanceStore);

  useEffect(() => {
    // const actualFontClassName = `font-${font}`;
    // document.body.classList.add(actualFontClassName);
    // document.body.classList.remove(
    //   ...fontClasses.filter(
    //     (fontElement: string) => fontElement !== actualFontClassName
    //   )
    // );
    // console.log(`ActualFontClassName: ${actualFontClassName}`);
  }, [font]);

  return <></>;
};

export default FontComponent;
