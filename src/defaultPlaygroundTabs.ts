import type { MiddlewareOptions } from '@apollographql/graphql-playground-html';

const isDev = process.platform === 'win32' || process.platform === 'darwin';

const defaultTabs: NonNullable<MiddlewareOptions['tabs']> = [
	{
		name: 'Person Details simple',
		endpoint: isDev ? `http://localhost:${process.env.PORT || 8293}` : 'https://swapi.skyra.pw/',
		query: [
			'{',
			'\tgetPerson(person: lukeskywalker) {',
			'\t\tbirthYear',
			'\t\teyeColor',
			'\t\tfilms { name }',
			'\t\tgender',
			'\t\thairColor',
			'\t\theight',
			'\t\thomeworld',
			'\t\tmass',
			'\t\tname',
			'\t\tskinColor',
			'\t\tspecies { name }',
			'\t\tstarships { name }',
			'\t\tvehciles { name }',
			'\t}',
			'}'
		].join('\n')
	},
	{
		name: 'Person Details with variables',
		endpoint: isDev ? `http://localhost:${process.env.PORT || 8293}` : 'https://swapi.skyra.pw/',
		variables: ['{', '\t"person": "lukeskywalker"', '}'].join('\n'),
		query: [
			'query($person: People!) {',
			'\tgetPerson(person: $person) {',
			'\t\tbirthYear',
			'\t\teyeColor',
			'\t\tfilms { name }',
			'\t\tgender',
			'\t\thairColor',
			'\t\theight',
			'\t\thomeworld',
			'\t\tmass',
			'\t\tname',
			'\t\tskinColor',
			'\t\tspecies { name }',
			'\t\tstarships { name }',
			'\t\tvehciles { name }',
			'\t}',
			'}'
		].join('\n')
	},
	{
		name: 'Person with fragments and variables',
		endpoint: isDev ? `http://localhost:${process.env.PORT || 8293}` : 'https://swapi.skyra.pw/',
		variables: ['{', '\t"person": "lukeskywalker"', '}'].join('\n'),
		query: [
			'fragment data on People {',
			'\t\tbirthYear',
			'\t\teyeColor',
			'\t\tfilms { name }',
			'\t\tgender',
			'\t\thairColor',
			'\t\theight',
			'\t\thomeworld',
			'\t\tmass',
			'\t\tname',
			'\t\tskinColor',
			'\t\tspecies { name }',
			'\t\tstarships { name }',
			'\t\tvehciles { name }',
			'}',
			'',
			'query($person: People!) {',
			'\tgetPerson(person: $person) {',
			'\t\t...data',
			'\t}',
			'}'
		].join('\n')
	}
];

export default defaultTabs;
