import { GraphQLScalarType, Kind, ValueNode } from 'graphql';

const MAX_LONG = Number.MAX_SAFE_INTEGER;

const MIN_LONG = Number.MIN_SAFE_INTEGER;

function coerceLong(value: unknown): number {
	if (value === '') {
		throw new TypeError('Long cannot represent non 52-bit signed integer value: (empty string)');
	}

	const num = Number(value);

	if (num === Infinity || (num <= MAX_LONG && num >= MIN_LONG)) {
		if (num < 0) {
			return Math.ceil(num);
		}
		return Math.floor(num);
	}

	throw new TypeError(`Long cannot represent non 52-bit signed integer value: ${String(value)}`);
}

function parseLiteral(ast: ValueNode) {
	if (ast.kind === Kind.INT) {
		const num = parseInt(ast.value, 10);
		if (num <= MAX_LONG && num >= MIN_LONG) {
			return num;
		}
	}

	return null;
}

export default new GraphQLScalarType({
	name: 'Long',
	description: 'A 52-bit integer',
	serialize: coerceLong,
	parseValue: coerceLong,
	parseLiteral
});
