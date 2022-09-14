import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "black": "#000000",
      "oxford": "#112233", // oxford blue
      // "white": "#fff",
      "white": "#ECF0F1", // cultured
    },
  },
} as Options;
