import { CreateSpotifyAuthInput } from './create-spotify-auth.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSpotifyAuthInput extends PartialType(CreateSpotifyAuthInput) {
  @Field(() => Int)
  id: number;
}
