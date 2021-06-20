import type { MiddlewareOptions } from '@apollographql/graphql-playground-html';

const isDev = process.platform === 'win32' || process.platform === 'darwin';

const defaultTabs: NonNullable<MiddlewareOptions['tabs']> = [
  {
    name: 'Get Pokemon Details simple',
    endpoint: isDev ? `http://localhost:${process.env.PORT || 8293}` : 'https://graphqlpokemon.favware.tech/',
    query: [
      '{',
      '\tgetPokemonDetailsByName(pokemon: dragonite reverse: true take: 1) {',
      '\t\tnum',
      '\t\tspecies',
      '\t\ttypes',
      '\t\tabilities { first second hidden }',
      '\t\tbaseStats { hp attack defense specialattack specialdefense speed }',
      '\t\tgender { male female }',
      '\t\theight',
      '\t\tweight',
      '\t\tflavorTexts { game flavor }',
      '\t\tsprite',
      '\t\tshinySprite',
      '\t\tbackSprite',
      '\t\tshinyBackSprite',
      '\t\tsmogonTier',
      '\t\tsmogonPage',
      '\t\tserebiiPage',
      '\t\tbulbapediaPage',
      '\t}',
      '}'
    ].join('\n')
  },
  {
    name: 'Pokemon Details with variables',
    endpoint: isDev ? `http://localhost:${process.env.PORT || 8293}` : 'https://graphqlpokemon.favware.tech/',
    variables: ['{', '  "pokemon": "mewtwo"', '}'].join('\n'),
    query: [
      'query($pokemon: Pokemon!) {',
      '\tgetPokemonDetailsByName(pokemon:$pokemon reverse: true, take:1) {',
      '\t\tnum',
      '\t\tspecies',
      '\t\ttypes',
      '\t\tabilities { first second hidden }',
      '\t\tbaseStats { hp attack defense specialattack specialdefense speed }',
      '\t\tgender { male female }',
      '\t\theight',
      '\t\tweight',
      '\t\tflavorTexts { game flavor }',
      '\t\tsprite',
      '\t\tshinySprite',
      '\t\tbackSprite',
      '\t\tshinyBackSprite',
      '\t\tsmogonTier',
      '\t\tsmogonPage',
      '\t\tserebiiPage',
      '\t\tbulbapediaPage',
      '\t}',
      '}'
    ].join('\n')
  },
  {
    name: 'Pokemon Details with fragments and variables',
    endpoint: isDev ? `http://localhost:${process.env.PORT || 8293}` : 'https://graphqlpokemon.favware.tech/',
    variables: ['{', '  "pokemon": "arceus",', '  "reverse": true,', '  "take": 1', '}'].join('\n'),
    query: [
      'fragment data on DexDetails {',
      '\t\tnum',
      '\t\tspecies',
      '\t\ttypes',
      '\t\tabilities { first second hidden }',
      '\t\tbaseStats { hp attack defense specialattack specialdefense speed }',
      '\t\tgender { male female }',
      '\t\theight',
      '\t\tweight',
      '\t\tflavorTexts { game flavor }',
      '\t\tsprite',
      '\t\tshinySprite',
      '\t\tbackSprite',
      '\t\tshinyBackSprite',
      '\t\tsmogonTier',
      '\t\tsmogonPage',
      '\t\tserebiiPage',
      '\t\tbulbapediaPage',
      '}',
      '',
      'query($pokemon: Pokemon! $reverse: Boolean! $take: Int!) {',
      '\tgetPokemonDetailsByName(pokemon:$pokemon reverse: $reverse, take: $take) {',
      '\t\t...data',
      '\t}',
      '}'
    ].join('\n')
  }
];

export default defaultTabs;
