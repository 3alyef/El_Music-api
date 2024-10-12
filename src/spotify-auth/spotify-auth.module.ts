import { Module } from '@nestjs/common';
import { SpotifyAuthService } from './spotify-auth.service';
import { SpotifyAuthResolver } from './spotify-auth.resolver';
import { AuthSpotifyApi } from './services/auth-spotify-api.service';

@Module({
  providers: [SpotifyAuthResolver, SpotifyAuthService, AuthSpotifyApi],
})
export class SpotifyAuthModule {}
