import { Args, Context, Query, Resolver } from '@nestjs/graphql';
import { SpotifyArtistNameService } from './spotify-artist-name.service';
import { SpotifyArtistName } from './entities/spotify-artist-name.entity';
import { HttpException, HttpStatus } from '@nestjs/common';

@Resolver(() => SpotifyArtistName)
export class SpotifyArtistNameResolver {
  constructor(
    private readonly spotifyArtistNameService: SpotifyArtistNameService,
  ) {}

  @Query(() => SpotifyArtistName, { name: 'Search' })
  async searchArtistByName(
    @Context() context: any,
    @Args('artistName', { type: () => String }) artistName: string,
    @Args('limit', { type: () => String, nullable: true }) limit?: string,
  ) {
    const authToken = context.req.headers.authorization;
    if (!artistName || !authToken) {
      throw new HttpException(
        'Nome do artista ou authToken ausentes',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.spotifyArtistNameService.getArtistByName(
      artistName,
      authToken,
      Number(limit),
    );
  }

  // @Mutation(() => SpotifyAuth)
  // createSpotifyAuth(@Args('createSpotifyAuthInput') createSpotifyAuthInput: CreateSpotifyAuthInput) {
  //   return this.spotifyAuthService.create(createSpotifyAuthInput);
  // }

  // @Query(() => [SpotifyAuth], { name: 'spotifyAuth' })
  // findAll() {
  //   return this.spotifyAuthService.findAll();
  // }

  // @Query(() => SpotifyAuth, { name: 'spotifyAuth' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.spotifyAuthService.findOne(id);
  // }

  // @Mutation(() => SpotifyAuth)
  // updateSpotifyAuth(@Args('updateSpotifyAuthInput') updateSpotifyAuthInput: UpdateSpotifyAuthInput) {
  //   return this.spotifyAuthService.update(updateSpotifyAuthInput.id, updateSpotifyAuthInput);
  // }

  // @Mutation(() => SpotifyAuth)
  // removeSpotifyAuth(@Args('id', { type: () => Int }) id: number) {
  //   return this.spotifyAuthService.remove(id);
  // }
}
