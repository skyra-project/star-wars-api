<div align="center">

<img height="200" src="https://cdn.favware.tech/img/gqlp.png" alt="ArchAngel"/>

# Star Wars API

**GraphQL API similar to [swapi.dev](https://swapi.dev)**

[![GitHub](https://img.shields.io/github/license/skyra-project/star-wars-api)](https://github.com/skyra-project/star-wars-api/blob/main/LICENSE)
[![Depfu](https://badges.depfu.com/badges/5c35c8f7e714ce96c424120a1a5f5b1b/count.svg)](https://depfu.com/github/skyra-project/star-wars-api?project_id=11729)

[![Continuous Deployment](https://github.com/skyra-project/star-wars-api/workflows/Continuous%20Deployment/badge.svg)](https://github.com/skyra-project/star-wars-api/actions?query=workflow%3A"Continuous+Deployment")
[![Continuous Integration](https://github.com/skyra-project/star-wars-api/workflows/Continuous%20Integration/badge.svg)](https://github.com/skyra-project/star-wars-api/actions?query=workflow%3A"Continuous+Integration")
[![Automatic Data Update](https://github.com/skyra-project/star-wars-api/workflows/Automatic%20Data%20Update/badge.svg)](https://github.com/skyra-project/star-wars-api/actions?query=workflow%3A"Automatic+Data+Update")
[![npm](https://img.shields.io/npm/v/@skyra/star-wars-api?color=crimson&label=TypeScript%20API%20Typings%20Version&logo=npm)](https://www.npmjs.com/package/@skyra/star-wars-api)

[![Support Server](https://discord.com/api/guilds/254360814063058944/embed.png?style=banner2)](https://join.skyra.pw)

</div>

---

**Table of Contents**

-   [Star Wars API](#star-wars-api)
-   [Installation](#installation)
-   [API Documentation](#api-documentation)
-   [Usage](#usage)
    -   [Using `Fetch`](#using-fetch)
    -   [Using `Apollo Boost`](#using-apollo-boost)
    -   [Using `Apollo Client React`](#using-apollo-client-react)
-   [Meta](#meta)
    -   [License](#license)
    -   [Buy us some doughnuts](#buy-us-some-doughnuts)
    -   [Contributors ✨](#contributors-%E2%9C%A8)

---

**_Query for Star Wars data using GraphQL_**

**Key Features**

-   Fully generated client-side TypeScript typings published to
    -   [npm] as `@skyra/star-wars-api`
    -   [GitHub Package Registry][ghcr_npm] as `@skyra/star-wars-api`
-   Docker images of the API for private hosting published to
    -   [Dockerhub] as `skyrabot/star-wars-api`
    -   [GitHub Package Registry][ghcr_docker] as `ghcr.io/skyrabot/star-wars-api:latest`
-   Provides information about various assets in Pokémon
    -   Pokédex
    -   Items
    -   Abilities
    -   Moves
    -   Learnsets
    -   Type matchups

# Installation

**_Note: This is only needed if you are writing TypeScript, or if you're using a GraphQL schema validator. If you're using neither of these, you do not need to install this package. The package does NOT include the actual API, ONLY type information._**

Install client side typings from [yarn] or [npm]:

```sh
yarn add -D @skyra/star-wars-api
```

```sh
npm install -D @skyra/star-wars-api
```

---

# API Documentation

For the full documentation of the deployed version please see [the GraphQL Playground on the API].

# Usage

_These examples are written as based on TypeScript. For JavaScript simply change out the imports to `require` syntax and remove any type information._

## Using `Fetch`

```ts
import type { Query } from '@@skyra/star-wars-api';

interface StarWarsGraphqlApiResponse<K extends keyof Omit<Query, '__typename'>> {
	data: Record<K, Omit<Query[K], '__typename'>>;
}

fetch('https://graphqlpokemon.favware.tech/', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		query: `
      {
        getPokemonDetails(pokemon: dragonite skip: 0 take: 2 reverse: true) {
            sprite
            num
            species
            color
        }
      }
    `
	})
})
	.then((res) => res.json() as Promise<StarWarsGraphqlApiResponse<'getPokemonDetails'>>)
	.then((json) => console.log(json.data));
```

## Using `Apollo Boost`

_note: for a working example see [dexa]_

```ts
import type { Query, QueryGetPokemonDetailsByFuzzyArgs } from '@@skyra/star-wars-api';
import ApolloClient from 'apollo-boost';
import fetch from 'cross-fetch';
import gql from 'graphql-tag';

type StarWarsGraphqlApiResponse<K extends keyof Omit<Query, '__typename'>> = Record<K, Omit<Query[K], '__typename'>>;

const getPokemonDetailsByFuzzy = gql`
	query pokemonDetails($pokemon: String!) {
		getPokemonDetailsByFuzzy(pokemon: $pokemon, skip: 0, take: 1, reverse: true) {
			sprite
			num
			species
			color
		}
	}
`;

const apolloClient = new ApolloClient({
	uri: 'https://graphqlpokemon.favware.tech/',
	fetch
});

const {
	data: { getPokemonDetailsByFuzzy: pokemonData }
} = await apolloClient.query<StarWarsGraphqlApiResponse<'getPokemonDetailsByFuzzy'>, QueryGetPokemonDetailsByFuzzyArgs>({
	query: getPokemonDetailsByFuzzy,
	variables: { pokemon: 'dragonite' }
});

console.log(pokemonData);
```

## Using `Apollo Client React`

```ts
// ApolloClient setup
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

// Instantiate required constructor fields
const cache = new InMemoryCache();
const link = new HttpLink({
	uri: 'https://graphqlpokemon.favware.tech/'
});

export const client = new ApolloClient({
	// Provide required constructor fields
	cache: cache,
	link: link,

	// Provide some optional constructor fields
	name: 'graphql-pokemon-client',
	version: '1.0',
	queryDeduplication: false,
	defaultOptions: {
		watchQuery: {
			fetchPolicy: 'cache-and-network'
		}
	}
});
```

```tsx
// Component
import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import type { Query } from '@@skyra/star-wars-api';
import { client } from './ApolloClient';

interface StarWarsGraphqlApiResponse<K extends keyof Omit<Query, '__typename'>> {
	data: Record<K, Omit<Query[K], '__typename'>>;
}

const GET_POKEMON_DETAILS = gql`
	{
		getPokemonDetails(pokemon: dragonite, skip: 0, take: 2, reverse: true) {
			sprite
			num
			species
			color
		}
	}
`;

export const Pokemon: React.FC = () => {
	const { loading, error, data } = useQuery<StarWarsGraphqlApiResponse<'getPokemonDetails'>>(GET_POKEMON_DETAILS, {
		client: client
	});

	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;

	return <div> Insert how you want to display the data here </div>;
};
```

# Meta

## License

Copyright © 2021, [Favware](https://github.com/skyra-project).
Released under the [MIT License](LICENSE.md).

## Buy us some doughnuts

Skyra Project is open source and always will be, even if we don't get donations. That said, we know there are amazing people who
may still want to donate just to show their appreciation. Thanks you very much in advance!

We accept donations through Patreon, BitCoin, Ethereum, and Litecoin. You can use the buttons below to donate through your method of choice.

| Donate With |         QR         |                        Address                         |
| :---------: | :----------------: | :----------------------------------------------------: |
|   Patreon   | ![PatreonImage][]  |                 [Click Here][patreon]                  |
|   PayPal    |  ![PayPalImage][]  |                  [Click Here][paypal]                  |
|   BitCoin   | ![BitcoinImage][]  |     [3JNzCHMTFtxYFWBnVtDM9Tt34zFbKvdwco][bitcoin]      |
|  Ethereum   | ![EthereumImage][] | [0xcB5EDB76Bc9E389514F905D9680589004C00190c][ethereum] |
|  Litecoin   | ![LitecoinImage][] |     [MNVT1keYGMfGp7vWmcYjCS8ntU8LNvjnqM][litecoin]     |

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

<!-- LINK DUMP -->

[bitcoin]: bitcoin:3JNzCHMTFtxYFWBnVtDM9Tt34zFbKvdwco?amount=0.01&label=Skyra%20Discord%20Bot
[bitcoinimage]: https://cdn.skyra.pw/gh-assets/bitcoin.png
[dockerhub]: https://hub.docker.com/r/skyrabot/star-wars-api
[ethereum]: ethereum:0xcB5EDB76Bc9E389514F905D9680589004C00190c?amount=0.01&label=Skyra%20Discord%20Bot
[ethereumimage]: https://cdn.skyra.pw/gh-assets/ethereum.png
[ghcr_docker]: https://github.com/orgs/skyra-project/packages/container/package/star-wars-api
[ghcr_npm]: https://github.com/skyra-project/star-wars-api/packages/199047
[litecoin]: litecoin:MNVT1keYGMfGp7vWmcYjCS8ntU8LNvjnqM?amount=0.01&label=Skyra%20Discord%20Bot
[litecoinimage]: https://cdn.skyra.pw/gh-assets/litecoin.png
[npm]: https://www.npmjs.com/package/@skyra/star-wars-api
[patreon]: https://donate.skyra.pw/patreon
[patreonimage]: https://cdn.skyra.pw/gh-assets/patreon.png
[paypal]: https://donate.skyra.pw/paypal
[paypalimage]: https://cdn.skyra.pw/gh-assets/paypal.png
[the graphql playground on the api]: https://swapi.skyra.pw
[yarn]: https://yarnpkg.com/package/@skyra/star-wars-api
