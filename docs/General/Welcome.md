---
sidebar_position: 0
---

<div align="center">

![Sapphire Logo](https://cdn.skyra.pw/gh-assets/sapphire-banner.png)

# Sapphire

[![Discord server](https://img.shields.io/discord/737141877803057244?color=5865F2&logo=discord&logoColor=white)](https://discord.gg/djs)
[![NPM version](https://img.shields.io/npm/v/@sapphire/framework?color=crimson&label=NPM%20Version&logo=npm)](https://www.npmjs.com/package/@favware/graphql-pokemon)
[![NPM downloads](https://img.shields.io/npm/dt/@sapphire/framework.svg?label=NPM%20Downloads&logo=npm)](https://www.npmjs.com/package/@sapphire/framework)
[![Patreon](https://img.shields.io/badge/patreon-donate-brightgreen.svg?label=Patreon&logo=patreon&colorB=F96854&style=flat-square&link=https://sapphirejs.dev/patreon)](https://sapphirejs.dev/patreon)
[![PayPal](https://img.shields.io/badge/paypal-donate-brightgreen.svg?label=Paypal&logo=paypal&colorB=00457C&style=flat-square&link=https://sapphirejs.dev/paypal)](https://sapphirejs.dev/paypal)

</div>

## About

Sapphire is a next-gen object-oriented [Discord.js](https://discord.js.org/) bot framework.

Sapphire is a community driven framework that aims to give you all the features you need to make your Discord bot.

With a history of many other Discord bot frameworks (both for NodeJS and other languages) to inspire Sapphire, it has become the ultimate modern experience of writing your code.

### Key Features

- Advanced plugin support
- Supports both CommonJS and ESM
- Completely modular and extendable
- Designed with first class TypeScript support in mind
- Includes optional utilities that you can use in any project

## Installation

**Node.js 16.6.0 or newer is required.**  

```sh-session
npm install @sapphire/framework discord.js
yarn add @sapphire/framework discord.js
pnpm add @sapphire/framework discord.js
```

### Optional packages

#### Official Plugins

- [**@sapphire/plugin-api:**](https://www.npmjs.com/package/@sapphire/plugin-api) Expose a REST API within the same process as your bot.
- [**@sapphire/plugin-editable-commands:**](https://www.npmjs.com/package/@sapphire/plugin-editable-commands) Make it possible to edit your command messages and trigger new commands.
- [**@sapphire/plugin-i18next:**](https://www.npmjs.com/package/@sapphire/plugin-i18next) Integrate [i18next](https://i18next.com) into your bot for internationalization.
- [**@sapphire/plugin-logger:**](https://www.npmjs.com/package/@sapphire/plugin-logger) Add beautiful stylized logging to your bot.
- [**@sapphire/plugin-subcommands:**](https://www.npmjs.com/package/@sapphire/plugin-subcommands) Add subcommands do your bot.

#### Official Utilities and configurations

- [**@sapphire/cli:**](https://www.npmjs.com/package/@sapphire/cli) CLI to generate a new Sapphire bot, as we as add components to your current one.
- [**@sapphire/utilities:**](https://www.npmjs.com/package/@sapphire/utilities) A plethora of awesome utility functions that are more useful than you can probably imagine.
- [**@sapphire/ts-config:**](https://www.npmjs.com/package/@sapphire/ts-config) Our ts-config. We use it for all Sapphire projects, but it's also a great starting point for your TypeScript Discord bot.
- [**@sapphire/discord-utilities:**](https://www.npmjs.com/package/@sapphire/discord-utilities) Useful utilities for any JavaScript/TypeScript based Discord bot.
- [**@sapphire/discord.js-utilities:**](https://www.npmjs.com/package/@sapphire/discord.js-utilities) Useful utilities for a bot using Discord.JS such as paginated responses, type checks and prompts.
- [**@sapphire/decorators:**](https://www.npmjs.com/package/@sapphire/decorators) Awesome decorators that let you write really clean code.
- [**@sapphire/fetch:**](https://www.npmjs.com/package/@sapphire/fetch) A tiny wrapper around [cross-fetch](https://npmjs.com/package/cross-fetch) that adds extra ease-of-use and type safety.
- [**@sapphire/time-utilities:**](https://www.npmjs.com/package/@sapphire/time-utilities) Various methods and classes related to manipulating [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) and time.
- [**@sapphire/embed-jsx:**](https://www.npmjs.com/package/@sapphire/embed-jsx) Ever wanted to write your Discord embeds using JSX? Use this library.
- [**@sapphire/eslint-config:**](https://www.npmjs.com/package/@sapphire/eslint-config) Our opinionated ESLint config that we use for all Sapphire projects.
- [**@sapphire/prettier-config:**](https://www.npmjs.com/package/@sapphire/prettier-config) Our opinionated Prettier config that we use for all Sapphire projects.
- [**@sapphire/event-iterator:**](https://www.npmjs.com/package/@sapphire/event-iterator) Turn your event emitter events into async iterators.
- [**@sapphire/ratelimits:**](https://www.npmjs.com/package/@sapphire/ratelimits) Handle ratelimits with efficient bucket strategies.
- [**@sapphire/snowflake:**](https://www.npmjs.com/package/@sapphire/snowflake) Generate and parse various forms of [Snowflakes](https://betterprogramming.pub/uuid-generation-snowflake-identifiers-unique-2aed8b1771bc).
- [**@sapphire/stopwatch:**](https://www.npmjs.com/package/@sapphire/stopwatch) Accurately measure passing time with this stopwatch utility.
- [**@sapphire/type:**](https://www.npmjs.com/package/@sapphire/type) A type detection utility leveraging NodeJS internals.
- [**@sapphire/async-queue:**](https://www.npmjs.com/package/@sapphire/async-queue) Sequential asynchronous lock-based queue for promises.

## Example usage

```js
const { SapphireClient } = require('@sapphire/framework');

const client = new SapphireClient({ intents: ['GUILDS', 'GUILD_MESSAGES'] });

client.login('your-token-goes-here');
```

## Links

- [Website](https://sapphirejs.dev) ([source](https://github.com/sapphiredev/website))
- [Documentation](https://sapphirejs.dev/docs/General/Welcome)
- [Guide](https://sapphirejs.dev/docs/guide)
- [Sapphire Discord Server](https://sapphirejs.dev/discord)
- [Discord.js Discord server](https://discord.gg/djs)
- [Discord API Discord server](https://discord.gg/discord-api)
- [GitHub](https://github.com/sapphiredev/)

## Contributing

Before creating an issue, please ensure that it hasn't already been reported/suggested, and double-check the
[documentation](https://sapphirejs.dev/docs/General/Welcome).  
See [the contribution guide](https://github.com/sapphiredev/readme/blob/main/CONTRIBUTING.md) if you'd like to submit a PR.

## Help

If you don't understand something in the documentation, you are experiencing problems, or you just need a gentle
nudge in the right direction, please don't hesitate to join our official [Sapphire Community Server](https://sapphirejs.dev/discord).