import { z } from "zod";

const themeSchema = z.enum(["light", "dark"]);
const fontSchema = z.enum([
  "inter",
  "manrope",
  "arial",
  "poppins",
  "robotoMono",
]);

export const formSchema = z.object({
  font: fontSchema,
  theme: themeSchema,
});
