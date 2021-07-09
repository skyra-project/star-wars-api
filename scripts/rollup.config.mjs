import typescript from 'rollup-plugin-typescript2';
import { fileURLToPath } from 'url';

const rootDir = new URL('../', import.meta.url);
const tsDir = new URL('generated/ts/', rootDir);

const tsconfigFile = new URL('tsconfig.generated.json', rootDir);
const inputFile = new URL('star-wars-api.ts', tsDir);
const cjsOutputFile = new URL('star-wars-api.cjs', tsDir);
const mjsOutputFile = new URL('star-wars-api.mjs', tsDir);

export default {
	input: fileURLToPath(inputFile),
	output: [
		{
			file: fileURLToPath(cjsOutputFile),
			format: 'cjs',
			exports: 'named',
			sourcemap: true
		},
		{
			file: fileURLToPath(mjsOutputFile),
			format: 'es',
			exports: 'named',
			sourcemap: true
		}
	],
	plugins: [typescript({ tsconfig: fileURLToPath(tsconfigFile) })]
};
