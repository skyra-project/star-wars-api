import GraphQLCollection from '#utils/GraphQLCollection';
import type { StarWarsApi } from '#utils/star-wars';

/** The Star Wars films */
export default new GraphQLCollection<string, StarWarsApi.Film>([]);
