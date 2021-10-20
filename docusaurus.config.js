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
	organizationName: 'sapphiredev',
	projectName: 'framework',

	themes: ['@docusaurus/theme-live-codeblock'],

	plugins: [
		[
			'docusaurus-plugin-typedoc',
			{
				id: 'framework',
				entryPoints: ['./projects/framework/src/index.ts'],
				tsconfig: './projects/framework/src/tsconfig.json',
				readme: 'none',
				out: 'Documentation/api-framework',
				sidebar: {
					categoryLabel: '@sapphire/framework',
					position: 0,
					fullNames: true
				},
				watch: process.env.TYPEDOC_WATCH
			}
		],
		[
			'docusaurus-plugin-typedoc',
			{
				id: 'Pieces',
				entryPoints: ['./projects/pieces/src/index.ts'],
				tsconfig: './projects/pieces/src/tsconfig.json',
				readme: 'none',
				out: 'Documentation/api-pieces',
				sidebar: {
					categoryLabel: '@sapphire/pieces',
					position: 1,
					fullNames: true
				},
				watch: process.env.TYPEDOC_WATCH
			}
		],
		[
			'docusaurus-plugin-typedoc',
			{
				id: 'Utilities',
				entryPoints: ['./projects/utilities/'],
				entryPointStrategy: 'packages',
				tsconfig: './projects/utilities/tsconfig.dev.json',
				readme: 'none',
				out: 'Documentation/api-utilities',
				sidebar: {
					categoryLabel: 'Sapphire Utilities',
					position: 2,
					fullNames: true
				},
				watch: process.env.TYPEDOC_WATCH
			}
		],
		[
			'docusaurus-plugin-typedoc',
			{
				id: 'Plugins',
				entryPoints: ['./projects/plugins/'],
				entryPointStrategy: 'packages',
				tsconfig: './projects/plugins/tsconfig.base.json',
				readme: 'none',
				out: 'Documentation/api-plugins',
				sidebar: {
					categoryLabel: 'Sapphire Plugins',
					position: 3,
					fullNames: true
				},
				watch: process.env.TYPEDOC_WATCH
			}
		],
		[
			'docusaurus-plugin-typedoc',
			{
				id: 'Type',
				entryPoints: ['./projects/type/src/index.ts'],
				tsconfig: './projects/type/src/tsconfig.json',
				readme: 'none',
				out: 'Documentation/api-type',
				sidebar: {
					categoryLabel: '@sapphire/type',
					position: 4,
					fullNames: true
				},
				watch: process.env.TYPEDOC_WATCH
			}
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
				title: 'Sapphire',
				logo: {
					alt: 'Sapphire Logo',
					src: 'img/gem.svg'
				},
				items: [
					{
						to: '/',
						label: 'Home',
						position: 'left',
						activeBaseRegex: '^/$'
					},
					{
						type: 'doc',
						docId: 'General/Welcome',
						position: 'left',
						label: 'Documentation'
					},
					{
						href: 'https://sapphirejs.dev/discord',
						label: 'Discord',
						position: 'right'
					},
					{
						href: 'https://github.com/sapphiredev',
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
