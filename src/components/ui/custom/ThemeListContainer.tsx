"use client";
import React, { useEffect, useRef, useState } from "react";
import ThemeContainerLabel from "./ThemeContainerLabel";
import ThemeCard from "./ThemeCard";

import { Theme } from "@/lib/themeSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { RadioGroup, RadioGroupItem } from "../radio-group";
import { Label } from "../label";

const ThemeListContainer = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>("light");
  const dispatch = useAppDispatch();

  const theme = useAppSelector((state: RootState) => state.themeStore.theme);

  const handleThemeChange = (theme: Theme) => {
    // dispatch(setAppTheme( theme ));
    setCurrentTheme(theme);
  };

  // const wierdValue = "[&:has([data-state=checked])>div]:border-primary";

  return (
    // <div className="space-y-1">
    //   <ThemeContainerLabel />
    //   <div
    //     role="radiogroup"
    //     aria-required="false"
    //     dir="ltr"
    //     className="grid max-w-md grid-cols-2 gap-8 pt-2"
    //     tabIndex={0}
    //     style={{ outline: "none" }}
    //   >
    //     <div className="space-y-2">
    //       <label
    //         className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    //         htmlFor=":r5f:-form-item"
    //       >
    //         <button
    //           type="button"
    //           role="radio"
    //           aria-checked="true"
    //           data-state="unchecked"
    //           value="light"
    //           className="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 sr-only"
    //           id=":r5f:-form-item"
    //           aria-describedby=":r5f:-form-item-description"
    //           tabIndex={-1}
    //           data-radix-collection-item=""
    //           onClick={() => handleThemeChange("light")}
    //         >
    //           <span
    //             data-state="unchecked"
    //             className="flex items-center justify-center"
    //           >
    //             <svg
    //               width={15}
    //               height={15}
    //               viewBox="0 0 15 15"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-3.5 w-3.5 fill-primary"
    //             >
    //               <path
    //                 d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
    //                 fill="currentColor"
    //                 fillRule="evenodd"
    //                 clipRule="evenodd"
    //               />
    //             </svg>
    //           </span>
    //         </button>
    //         <input
    //           aria-hidden="true"
    //           tabIndex={-1}
    //           type="radio"
    //           defaultValue="light"
    //           defaultChecked={false}
    //           style={{
    //             transform: "translateX(-100%)",
    //             position: "absolute",
    //             pointerEvents: "none",
    //             opacity: 0,
    //             margin: 0,
    //             width: 16,
    //             height: 16,
    //           }}
    //         />
    //         <ThemeCard
    //           theme="light"
    //           className={`${currentTheme === "light" && "border-primary"}`}
    //         />
    //         <span className="block w-full p-2 text-center font-normal">
    //           Light
    //         </span>
    //       </label>
    //     </div>
    //     <div className="space-y-2">
    //       <label
    //         className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 `}
    //         htmlFor=":r5h:-form-item"
    //       >
    //         <button
    //           type="button"
    //           role="radio"
    //           aria-checked="false"
    //           data-state="checked"
    //           value="dark"
    //           className="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 sr-only"
    //           id=":r5h:-form-item"
    //           aria-describedby=":r5h:-form-item-description"
    //           tabIndex={-1}
    //           data-radix-collection-item=""
    //           onClick={() => handleThemeChange("dark")}
    //         >
    //           <span
    //             data-state="checked"
    //             className="flex items-center justify-center"
    //           >
    //             <svg
    //               width={15}
    //               height={15}
    //               viewBox="0 0 15 15"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-3.5 w-3.5 fill-primary"
    //             >
    //               <path
    //                 d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
    //                 fill="currentColor"
    //                 fillRule="evenodd"
    //                 clipRule="evenodd"
    //               />
    //             </svg>
    //           </span>
    //         </button>
    //         <input
    //           aria-hidden="true"
    //           tabIndex={-1}
    //           type="radio"
    //           defaultValue="dark"
    //           style={{
    //             transform: "translateX(-100%)",
    //             position: "absolute",
    //             pointerEvents: "none",
    //             opacity: 0,
    //             margin: 0,
    //             width: 16,
    //             height: 16,
    //           }}
    //         />
    //         <ThemeCard
    //           theme="dark"
    //           className={`${currentTheme === "dark" && "border-primary"}`}
    //         />
    //         <span className="block w-full p-2 text-center font-normal">
    //           Dark
    //         </span>
    //       </label>
    //     </div>
    //   </div>
    // </div>
    <div className="space-y-1">
      <ThemeContainerLabel />
      <RadioGroup
        className="grid max-w-md grid-cols-2 gap-8 pt-2"
        style={{ outline: "none" }}
      >
        <div className="space-y-2">
          <ThemeCard
            theme="light"
            className={`${currentTheme === "light" && "border-primary"}`}
          />
          <RadioGroupItem
            value="light"
            id="lightRadio"
            onClick={() => handleThemeChange("light")}
          />
          <Label htmlFor="lightRadio">Light</Label>
        </div>
        <div className="space-y-2">
          <ThemeCard
            theme="dark"
            className={`${currentTheme === "dark" && "border-primary"}`}
          />
          <RadioGroupItem
            value="dark"
            id="darkRadio"
            onClick={() => handleThemeChange("dark")}
          />
          <Label htmlFor="darkRadio">Dark</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default ThemeListContainer;
