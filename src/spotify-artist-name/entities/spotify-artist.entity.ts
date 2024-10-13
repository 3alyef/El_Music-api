import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
class ExternalUrls {
  @Field(() => String, { description: 'The Spotify URL for the object.' })
  spotify: string;
}

@ObjectType()
class Followers {
  @Field(() => String, {
    description:
      'This will always be set to null, as the Web API does not support it at the moment.',
  })
  href: string | null;

  @Field(() => Int, { description: 'The total number of followers.' })
  total: number;
}

@ObjectType()
class TypeImages {
  @Field(() => Int, { description: 'The image height in pixels.' })
  height: number;

  @Field(() => String, { description: 'The source URL of the image.' })
  url: string;

  @Field(() => Int, { description: 'The image width in pixels.' })
  width: number;
}

@ObjectType()
export class ArtistType {
  @Field(() => [ArtistType], { description: 'List of artists' })
  artistsList: ArtistType[];

  @Field(() => ExternalUrls, {
    description: 'Known external URLs for this artist.',
  })
  external_urls: ExternalUrls;

  @Field(() => Followers, {
    description: 'Information about the followers of the artist.',
  })
  followers: Followers;

  @Field(() => [String], {
    description:
      'A list of the genres the artist is associated with. If not yet classified, the array is empty.',
  })
  genres: string[];

  @Field(() => String, {
    description:
      'A link to the Web API endpoint providing full details of the artist.',
  })
  href: string;

  @Field(() => String, { description: 'The Spotify ID for the artist.' })
  id: string;

  @Field(() => [TypeImages], {
    description: 'Images of the artist in various sizes, widest first.',
  })
  images: TypeImages[];

  @Field(() => String, { description: 'The name of the artist.' })
  name: string;

  @Field(() => Int, {
    description:
      "The popularity of the artist. The value will be between 0 and 100, with 100 being the most popular. The artist's popularity is calculated from the popularity of all the artist's tracks",
  })
  popularity: number;

  @Field(() => String, { description: 'The object type.' })
  type: string;

  @Field(() => String, { description: 'The Spotify URI for the artist.' })
  uri: string;
}
