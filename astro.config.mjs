import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import storyblok from "@storyblok/astro"

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    partytown(),
    sitemap(),
    image(),
    solidJs(),
    storyblok({
      accessToken: process.env.STORYBLOK_TOKEN,
      components: {
        "project": "storyblok/Project"
      }
    })
  ],
  vite: {
    ssr: {
      noExternal: ["@motionone/solid", "@solid-primitives/props"],
      external: ["svgo"]
    }
  }
});