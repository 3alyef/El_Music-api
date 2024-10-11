import { Module } from '@nestjs/common';
import { AuthSpotifyService } from './auth-spotify.service';
import { AuthSpotifyController } from './auth-spotify.controller';
import AuthSpotifyApi from './services/auth-spotify-api.service';

@Module({
  controllers: [AuthSpotifyController],
  providers: [AuthSpotifyService, AuthSpotifyApi],
})
export class AuthSpotifyModule {}
