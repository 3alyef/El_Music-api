import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ArtistType } from './spotify-artist.entity';

@ObjectType()
export class SpotifyArtistName {
  // @Field(() => Int, { description: 'Example field (placeholder)' })
  // exampleField: number;

  @Field(() => [ArtistType], { description: 'Artist Data' })
  items: ArtistType[];

  @Field(() => Int, { description: 'link' })
  total: number;
}
