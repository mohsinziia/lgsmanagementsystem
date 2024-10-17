import React from "react";

const ThemeContainerLabel = () => {
  return (
    <>
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor=":r5e:-form-item"
      >
        Theme
      </label>

      <p
        id=":r5e:-form-item-description"
        className="text-[0.8rem] text-muted-foreground"
      >
        Select the theme for the dashboard.
      </p>
    </>
  );
};

export default ThemeContainerLabel;
