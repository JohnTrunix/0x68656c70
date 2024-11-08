---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: '0x68656c70'
  text: 'Insights I wish I had earlier'
  tagline: Insights on Cloud, DevOps and related Topics
  image:
    light: assets/hero.svg
    dark: assets/hero-dark.svg
    alt: Growth
  actions:
    - theme: brand
      text: General
      link: /general
    - theme: alt
      text: AWS
      link: /aws
    - theme: alt
      text: Kubernetes
      link: /k8s

features:
  - title: Personal Notes
    icon: 📝
    details: Simple, personal notes on Cloud, DevOps, and related topics. I keep them short and easy to understand for quick and efficient takeaways.
  - title: Cloud Insights
    icon: ☁️
    details: Focused notes on cloud technologies, primarily AWS, with clear and actionable takeaways for my own learning.
  - title: Library
    icon: 📚
    details: A small collection of references and resources I use to look things up. I keep it here to make it easier for me and others to access it.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
}
</style>
