const lightCodeTheme = require('prism-react-renderer/themes/duotoneLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {Partial<import('@docusaurus/types').DocusaurusConfig>} */
const config = {
	title: 'Sapphire Documentation',
	url: 'https://www.sapphirejs.dev',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'sapphiredev', // Usually your GitHub org/user name.
	projectName: 'framework', // Usually your repo name.

	themes: ['@docusaurus/theme-live-codeblock'],

	plugins: [
		[
			'docusaurus-plugin-typedoc',

			// Plugin / TypeDoc options
			/** @type {Parameters<import('docusaurus-plugin-typedoc')['default']>[1]} */ ({
				entryPoints: ['./projects/framework/src/index.ts'],
				tsconfig: './projects/framework/src/tsconfig.json'
			})
		]
	],

	presets: [
		[
			'@docusaurus/preset-classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/'
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/blog/'
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				}
			})
		]
	],

	themeConfig:
		/** @type {Partial<import('@docusaurus/preset-classic').ThemeConfig>} */
		({
			navbar: {
				title: 'My Site',
				logo: {
					alt: 'My Site Logo',
					src: 'img/logo.svg'
				},
				items: [
					{
						type: 'doc',
						docId: 'intro',
						position: 'left',
						label: 'Tutorial'
					},
					{ to: '/blog', label: 'Blog', position: 'left' },
					{
						href: 'https://github.com/facebook/docusaurus',
						label: 'GitHub',
						position: 'right'
					}
				]
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Tutorial',
								to: '/docs/intro'
							}
						]
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Stack Overflow',
								href: 'https://stackoverflow.com/questions/tagged/docusaurus'
							},
							{
								label: 'Discord',
								href: 'https://discordapp.com/invite/docusaurus'
							},
							{
								label: 'Twitter',
								href: 'https://twitter.com/docusaurus'
							}
						]
					},
					{
						title: 'More',
						items: [
							{
								label: 'Blog',
								to: '/blog'
							},
							{
								label: 'GitHub',
								href: 'https://github.com/facebook/docusaurus'
							}
						]
					}
				],
				copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`
			},
			prism: {
				defaultLanguage: 'javascript',
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme
			}
		})
};

module.exports = config;
