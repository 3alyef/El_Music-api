import { Mutation, Resolver } from '@nestjs/graphql';
import { SpotifyAuthService } from './spotify-auth.service';
import { SpotifyAuth } from './entities/spotify-auth.entity';

@Resolver(() => SpotifyAuth)
export class SpotifyAuthResolver {
  constructor(private readonly spotifyAuthService: SpotifyAuthService) {}

  @Mutation(() => SpotifyAuth)
  generateNewToken() {
    return this.spotifyAuthService.generate();
  }
}
