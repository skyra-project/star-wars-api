import { IsBoolean, Max, Min } from 'class-validator';
import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
export default abstract class BaseFuzzyArgs {
	@Field(() => Int, { nullable: true, defaultValue: 0, description: 'Sets the offset where to start' })
	@Min(0)
	public offset = 0;

	@Field(() => Int, { nullable: true, defaultValue: 1, description: 'Return only this many results, starting from the offset' })
	@Min(1)
	@Max(50)
	public take = 1;

	@Field(() => Boolean, { nullable: true, defaultValue: false, description: 'Reverses the dataset before paginating' })
	@IsBoolean()
	public reverse = false;
}
