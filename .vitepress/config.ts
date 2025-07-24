import { defineConfig, HeadConfig, type DefaultTheme } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid(
  defineConfig({
    base: "/0x68656c70/",
    sitemap: {
      hostname: "https://johntrunix.github.io/0x68656c70/",
    },

    lang: "en-US",
    head: headers(),
    title: "0x68656c70",
    description: "Personal notes about tech stuff and things I love.",
    lastUpdated: true,
    cleanUrls: true,
    ignoreDeadLinks: "localhostLinks",

    markdown: {
      math: true,
      image: {
        lazyLoading: true,
      },
    },

    themeConfig: {
      logo: {
        light: "/logo.svg",
        dark: "/logo-dark.svg",
      },

      outline: "deep",
      search: {
        provider: "local",
      },
      socialLinks: [
        { icon: "github", link: "https://github.com/johntrunix/0x68656c70" },
      ],
      editLink: {
        pattern: "https://github.com/johntrunix/0x68656c70/edit/main/:path",
        text: "Edit this page on GitHub",
      },

      nav: [
        { text: "General", link: "general/dns" },
        { text: "Infrastructure", link: "infrastructure/datastores/postgres" },
      ],
      sidebar: {
        "general/": [
          { text: "Networking", items: [{ text: "DNS", link: "general/dns" }] },
          {
            text: "Security",
            items: [
              { text: "Certificate Authority", link: "general/ca" },
              { text: "Transport Layer Security", link: "general/tls" },
              { text: "Session Token", link: "general/session" },
              { text: "Json Web Token", link: "general/jwt" },
            ],
          },
        ],

        "infrastructure/": [
          {
            text: "Datastores",
            items: [
              {
                text: "PostgreSQL",
                link: "infrastructure/datastores/postgres",
              },
              {
                text: "Redis",
                link: "infrastructure/datastores/redis",
              },
            ],
          },
          {
            text: "Kubernetes",
            items: [
              {
                text: "Basic Resources",
                collapsed: true,
                items: [
                  { text: "Pods", link: "infrastructure/kubernetes/pods" },
                  {
                    text: "Deployments",
                    link: "infrastructure/kubernetes/deployments",
                  },
                  {
                    text: "Services",
                    link: "infrastructure/kubernetes/services",
                  },
                  {
                    text: "ConfigMaps",
                    link: "infrastructure/kubernetes/configmaps",
                  },
                  {
                    text: "Secrets",
                    link: "infrastructure/kubernetes/secrets",
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  })
);

/* prettier-ignore */
function headers(): HeadConfig[] {
  return [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'logo.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Insights on cloud, devops and related topics' }],
    ['meta', { property: 'og:site_name', content: '0x68656c70 - help' }],
    // ['meta', { property: 'og:image', content: '' }],
    ['meta', { property: 'og:url', content: 'https://github.com/johntrunix/0x68656c70' }],
  ];
}
