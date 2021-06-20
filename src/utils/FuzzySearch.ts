import type Collection from '@discordjs/collection';
import Fuse from 'fuse.js/dist/fuse.basic.min.js';

export default class FuzzySearch<K extends string | number, V> {
	private readonly CollectionArray: ReadonlyArray<V>;
	private readonly FuseOptions?: Fuse.IFuseOptions<V>;

	public constructor(collection: Collection<K, V>, keys: (keyof V)[], options?: Fuse.IFuseOptions<V>) {
		this.CollectionArray = [...collection.values()];
		this.FuseOptions = {
			...options,
			keys: keys as string[]
		};
	}

	public runFuzzy(query: string): Fuse.FuseResult<V>[] {
		const locquery = query.toLowerCase();

		const fuzzyFuse = new Fuse(this.CollectionArray, this.FuseOptions);

		return fuzzyFuse.search(locquery);
	}
}
