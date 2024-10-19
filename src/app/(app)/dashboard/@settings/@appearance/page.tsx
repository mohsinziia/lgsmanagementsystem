"use client";
import React, { useEffect, useState } from "react";
import ThemeListContainer from "@/components/ui/custom/ThemeListContainer";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import ThemeContainerLabel from "@/components/ui/custom/ThemeContainerLabel";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ThemeCard from "@/components/ui/custom/ThemeCard";
import { Label } from "@/components/ui/label";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { setAppTheme, Theme } from "@/lib/themeSlice";
import { setCookie } from "nookies";

const AppearancePage = () => {
  const theme = useAppSelector((state: RootState) => state.themeStore.theme);
  const [currentTheme, setCurrentTheme] = useState<Theme>(theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    dispatch(setAppTheme(newTheme));
    setCookie(null, "theme", newTheme, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
  };

  const handleThemeChange = (theme: Theme) => {
    setCurrentTheme(theme);
  };

  const ThemeSchema = z.enum(["light", "dark"]);
  const formSchema = z.object({
    theme: ThemeSchema,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      theme: "light",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    handleThemeChange(data.theme);
    setTheme(data.theme);
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Appearance</h3>
        <p className="text-sm text-muted-foreground">
          Customize the appearance of the app. Automatically switch between day
          and night themes.
        </p>
      </div>
      <div
        data-orientation="horizontal"
        role="none"
        className="shrink-0 bg-border h-[1px] w-full"
      />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor=":r5d:-form-item"
            >
              Font
            </label>
            <div className="relative w-max">
              <select
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-[200px] appearance-none font-normal"
                name="font"
                id=":r5d:-form-item"
                aria-describedby=":r5d:-form-item-description"
                aria-invalid="false"
              >
                <option value="inter">Inter</option>
                <option value="manrope">Manrope</option>
                <option value="system">System</option>
              </select>
              <svg
                width={15}
                height={15}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-3 top-2.5 h-4 w-4 opacity-50"
              >
                <path
                  d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p
              id=":r5d:-form-item-description"
              className="text-[0.8rem] text-muted-foreground"
            >
              Set the font you want to use in the dashboard.
            </p>
          </div>

          <FormControl>
            <FormItem>
              <FormField
                control={form.control}
                name="theme"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <ThemeContainerLabel />
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="grid max-w-md grid-cols-2 gap-8 pt-2"
                      style={{ outline: "none" }}
                    >
                      <FormItem>
                        <div className="space-y-2">
                          <ThemeCard
                            theme="light"
                            className={`${
                              currentTheme === "light" && "border-primary"
                            }`}
                          />
                          <FormControl>
                            <RadioGroupItem
                              value="light"
                              id="lightRadio"
                              onClick={() => handleThemeChange("light")}
                              checked={currentTheme === "light"}
                            />
                          </FormControl>
                          <Label htmlFor="lightRadio">Light</Label>
                        </div>
                      </FormItem>

                      <FormItem>
                        <div className="space-y-2">
                          <ThemeCard
                            theme="dark"
                            className={`${
                              currentTheme === "dark" && "border-primary"
                            }`}
                          />
                          <FormControl>
                            <RadioGroupItem
                              value="dark"
                              id="darkRadio"
                              onClick={() => handleThemeChange("dark")}
                              checked={currentTheme === "dark"}
                            />
                          </FormControl>
                          <Label htmlFor="darkRadio">Dark</Label>
                        </div>
                      </FormItem>

                      {/* <div className="space-y-2">
                        <ThemeCard
                          theme="dark"
                          className={`${
                            currentTheme === "dark" && "border-primary"
                          }`}
                        />
                        <RadioGroupItem
                          value="dark"
                          id="darkRadio"
                          onClick={() => handleThemeChange("dark")}
                        />
                        <Label htmlFor="darkRadio">Dark</Label>
                      </div> */}
                    </RadioGroup>
                  </FormItem>
                )}
              />
            </FormItem>
          </FormControl>

          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
            type="submit"
          >
            Update preferences
          </button>
        </form>
      </Form>
    </div>
  );
};

export default AppearancePage;
