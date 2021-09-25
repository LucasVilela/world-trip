import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Barlow",
  },
  colors: {
    brand: {
      900: "#47585B",
      200: "#DADADA",
      150: "#F5F8FA",
      100: "#999999",
    },
  },
});
