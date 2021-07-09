import { rm } from 'node:fs/promises';

const starWarsApiTsFile = new URL('../generated/ts/star-wars-api.ts', import.meta.url);

const options = { force: true, recursive: true };

await Promise.all([
	rm(starWarsApiTsFile, options) //
]);
