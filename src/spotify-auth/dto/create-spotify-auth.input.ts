import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSpotifyAuthInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
