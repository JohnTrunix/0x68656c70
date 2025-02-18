import { defineConfig, HeadConfig, type DefaultTheme } from 'vitepress';
import { withMermaid } from 'vitepress-plugin-mermaid';

export default withMermaid(
	defineConfig({
		base: '/',
		sitemap: {
			hostname: 'http://localhost:5173/0x68656c70/',
		},

		lang: 'en-US',
		head: headers(),
		title: '0x68656c70',
		description: 'help - Notes about technical stuff I wish I had before.',

		lastUpdated: true,
		cleanUrls: true,

		themeConfig: {
			logo: {
				light: '/logo.svg',
				dark: '/logo-dark.svg',
			},

			nav: nav(),
			sidebar: {
				'/general/': sidebarGeneral(),
				'/aws/': sidebarAWS(),
				'/k8s/': sidebarK8s(),
			},
			outline: 'deep',

			search: {
				provider: 'local',
			},

			socialLinks: [{ icon: 'github', link: 'https://github.com/johntrunix/0x68656c70' }],
			editLink: {
				pattern: 'https://github.com/johntrunix/0x68656c70/edit/main/:path',
				text: 'Edit this page on GitHub',
			},
		},

		markdown: {
			math: true,
			image: {
				lazyLoading: true,
			},
		},
	})
);

function nav(): DefaultTheme.NavItem[] {
	return [
		{
			text: 'General',
			link: '/general/index',
		},
		{ text: 'AWS', link: 'aws/index' },
		{ text: 'K8s', link: 'k8s/index' },
	];
}

function sidebarGeneral(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: 'Networking',
			items: [
				{ text: 'Networking', link: '/general/networking' },
				{ text: 'DNS', link: '/general/dns' },
				{ text: 'CA and TLS', link: '/general/ca-tls' },
			],
		},
		{
			text: 'Authentication',
			items: [
				{ text: 'Session Token', link: '/general/session' },
				{ text: 'Json Web Token (JWT)', link: '/general/jwt' },
			],
		},
	];
}

function sidebarAWS(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: 'Network',
			items: [
				{ text: 'VPC', link: '/aws/vpc' },
				{ text: 'Load Balancers', link: 'aws/lb' },
			],
		},
		{
			text: 'Storage',
			items: [
				{ text: 'S3', link: '/aws/s3' },
				{ text: 'EBS', link: '/aws/ebs' },
				{ text: 'RDS', link: '/aws/rds' },
				{ text: 'DynamoDB', link: '/aws/dynamo' },
			],
		},
		{
			text: 'Compute',
			items: [
				{ text: 'EC2', link: '/aws/ec2' },
				{ text: 'Lambda', link: '/aws/lambda' },
			],
		},
	];
}

function sidebarK8s(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: 'Resources',
			items: [
				{ text: 'Pods', link: '/k8s/pods' },
				{ text: 'Deployments', link: '/k8s/deployments' },
				{ text: 'Services', link: '/k8s/services' },
				{ text: 'Ingress', link: '/k8s/ingress' },
				{ text: 'ConfigMaps', link: '/k8s/configmaps' },
				{ text: 'Secrets', link: '/k8s/secrets' },
			],
		},
	];
}

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
