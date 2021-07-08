<div align="center">

# Star Wars API

**GraphQL API similar to [swapi.dev](https://swapi.dev)**

[![GitHub](https://img.shields.io/github/license/skyra-project/star-wars-api)](https://github.com/skyra-project/star-wars-api/blob/main/LICENSE)

<!-- TODO: Update codecov badge -->

[![codecov](https://codecov.io/gh/skyra-project/star-wars-api/branch/main/graph/badge.svg?token=hygqPZuVZ5)](https://codecov.io/gh/skyra-project/star-wars-api)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@skyra/star-wars-api?logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@skyra/star-wars-api)
[![npm](https://img.shields.io/npm/v/@skyra/star-wars-api?color=crimson&label=TypeScript%20API%20Typings%20Version&logo=npm)](https://www.npmjs.com/package/@skyra/star-wars-api)

<!-- TODO: Update Depfu badge -->

[![Depfu](https://badges.depfu.com/badges/8dedb6272de1c5b5535d5c82f174def8/count.svg)](https://depfu.com/github/sapphiredev/oject_id=17030)

[![Support Server](https://discord.com/api/guilds/254360814063058944/embed.png?style=banner2)](https://join.skyra.pw)

</div>

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

## Description

This API was inspired by [swapi.dev](https://swapi.dev), however we noticed that getting nested data to present on Discord was really slow because of the way that API worked. So we decided to take the data provided on the API, and make it into a GraphQL api.

## Features

-   Fully generated client-side TypeScript typings published to
    -   [npm] as `@skyra/star-wars-api`
-   Docker images of the API for private hosting published to
    -   [Dockerhub] as `skyrabot/star-wars-api`
    -   [GitHub Package Registry][ghcr_docker] as `ghcr.io/skyrabot/star-wars-api:latest`
-   Provides information about various assets in Star Wars
    -   Films
    -   People
    -   Planets
    -   Spaceships
    -   Species
    -   Vehicles

# Installation

**_Note: This is only needed if you are writing TypeScript, or if you're using a GraphQL schema validator. If you're using neither of these, you do not need to install this package. The package does NOT include the actual API, ONLY type information._**

You can use the following command to install this package, or replace `npm install` with your package manager of choice.

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
import type { Query } from '@skyra/star-wars-api';

interface StarWarsGraphqlApiResponse<K extends keyof Omit<Query, '__typename'>> {
	data: Record<K, Omit<Query[K], '__typename'>>;
}

fetch('https://swapi.skyra.pw/', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		query: `
      {
        getPerson(person: lukeskywalker) {
            name
            birthYear
            eyeColors
            gender
        }
      }
    `
	})
})
	.then((res) => res.json() as Promise<StarWarsGraphqlApiResponse<'getPerson'>>)
	.then((json) => console.log(json.data));
```

## Using `Apollo Boost`

```ts
import type { Query, QueryGetPersonFuzzyArgs } from '@skyra/star-wars-api';
import ApolloClient from 'apollo-boost';
import fetch from 'cross-fetch';
import gql from 'graphql-tag';

type StarWarsGraphqlApiResponse<K extends keyof Omit<Query, '__typename'>> = Record<K, Omit<Query[K], '__typename'>>;

const getPersonFuzzy = gql`
	query getPerson($person: String!) {
		getFuzzyPerson(person: $person, take: 10) {
			name
			birthYear
			eyeColors
			gender
		}
	}
`;

const apolloClient = new ApolloClient({
	uri: 'https://swapi.skyra.pw/',
	fetch
});

const {
	data: { getPersonFuzzy: peopleData }
} = await apolloClient.query<StarWarsGraphqlApiResponse<'getPersonFuzzy'>, QueryGetPersonFuzzyArgs>({
	query: getPersonFuzzy,
	variables: { person: 'luke' }
});

console.log(peopleData);
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
	uri: 'https://swapi.skyra.pw/'
});

export const client = new ApolloClient({
	// Provide required constructor fields
	cache: cache,
	link: link,

	// Provide some optional constructor fields
	name: 'graphql-star-wars-api-client',
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
import type { Query } from '@skyra/star-wars-api';
import { client } from './ApolloClient';

interface StarWarsGraphqlApiResponse<K extends keyof Omit<Query, '__typename'>> {
	data: Record<K, Omit<Query[K], '__typename'>>;
}

const GET_PERSON_DATA = gql`
	{
		getPerson(person: lukeskywalker) {
			name
			birthYear
			eyeColors
			gender
		}
	}
`;

export const StarWarsPerson: React.FC = () => {
	const { loading, error, data } = useQuery<StarWarsGraphqlApiResponse<'getPerson'>>(GET_PERSON_DATA, {
		client: client
	});

	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;

	return <div> Insert how you want to display the data here </div>;
};
```

# Meta

## License

Copyright © 2021, [Skyra Project](https://github.com/skyra-project).
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
[litecoin]: litecoin:MNVT1keYGMfGp7vWmcYjCS8ntU8LNvjnqM?amount=0.01&label=Skyra%20Discord%20Bot
[litecoinimage]: https://cdn.skyra.pw/gh-assets/litecoin.png
[npm]: https://www.npmjs.com/package/@skyra/star-wars-api
[patreon]: https://donate.skyra.pw/patreon
[patreonimage]: https://cdn.skyra.pw/gh-assets/patreon.png
[paypal]: https://donate.skyra.pw/paypal
[paypalimage]: https://cdn.skyra.pw/gh-assets/paypal.png
[the graphql playground on the api]: https://swapi.skyra.pw
