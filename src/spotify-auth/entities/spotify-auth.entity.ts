import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class SpotifyAuth {
  // @Field(() => Int, { description: 'Example field (placeholder)' })
  // exampleField: number;

  @Field(() => String, { description: 'Access Token' })
  access_token: string;

  @Field(() => String, { description: 'Token Type' })
  token_type: string;

  @Field(() => Int, { description: 'Token time' })
  expires_in: number;
}
