import { themes as prismThemes } from "prism-react-renderer"
import type { Config } from "@docusaurus/types"
import type * as Preset from "@docusaurus/preset-classic"

const config: Config = {
  title: "DAYKEEPER",

  url: "https://docs.daykeeper.net",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/luciano655dev/daykeeper-docs",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/DK_logo.jpg",
    navbar: {
      title: "DayKeeper",
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        {
          href: "https://daykeeper-about.netlify.app",
          label: "About Us",
          position: "left",
        },
        {
          href: "https://github.com/luciano655dev",
          label: "GitHub",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Repositories",
          items: [
            {
              label: "DayKeeper API",
              to: "https://github.com/luciano655dev/daykeeper-api",
            },
            {
              label: "DayKeeper APP",
              to: "https://github.com/luciano655dev/daykeeper-app",
            },
            {
              label: "DayKeeper Website",
              to: "https://github.com/luciano655dev/daykeeper-website",
            },
            {
              label: "DayKeeper About",
              to: "https://github.com/luciano655dev/daykeeper-about",
            },
            {
              label: "DayKeeper Docs",
              to: "https://github.com/luciano655dev/daykeeper-docs",
            },
          ],
        },
        {
          title: "Social Medias",
          items: [
            {
              label: "Twitter",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Instagram",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Gmail",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "About Me",
          items: [
            {
              label: "Portfolio",
              to: "https://luciano655.netlify.app",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DayKeeper`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
