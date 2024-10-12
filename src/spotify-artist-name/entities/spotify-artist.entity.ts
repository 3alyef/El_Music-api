import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
class ExternalUrls {
  @Field(() => String, { description: 'Spotify external link' })
  spotify: string;
}

@ObjectType()
class Followers {
  @Field(() => String, { description: 'Href to followers data' })
  href: string | null;

  @Field(() => Int, { description: 'Total number of followers' })
  total: number;
}

@ObjectType()
class TypeImages {
  @Field(() => Int, { description: 'Image height' })
  height: number;

  @Field(() => String, { description: 'Image URL' })
  url: string;

  @Field(() => Int, { description: 'Image width' })
  width: number;
}

@ObjectType()
export class ArtistType {
  @Field(() => [ArtistType], { description: 'List of artists' })
  artistsList: ArtistType[];

  @Field(() => ExternalUrls, { description: 'External URLs for the artist' })
  external_urls: ExternalUrls;

  @Field(() => Followers, { description: 'Artist followers' })
  followers: Followers;

  @Field(() => [String], { description: 'Genres list' })
  genres: string[];

  @Field(() => String, { description: 'Artist URL' })
  href: string;

  @Field(() => String, { description: 'Artist ID' })
  id: string;

  @Field(() => [TypeImages], { description: 'Artist images' })
  images: TypeImages[];

  @Field(() => String, { description: 'Artist name' })
  name: string;

  @Field(() => Int, { description: 'Artist popularity' })
  popularity: number;

  @Field(() => String, { description: 'Artist type' })
  type: string;

  @Field(() => String, { description: 'Artist URI' })
  uri: string;
}
