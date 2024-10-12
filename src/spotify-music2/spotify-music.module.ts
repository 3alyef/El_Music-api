import { Module } from '@nestjs/common';
import { SpotifyMusicService } from './spotify-music.service';
import { SpotifyMusicController } from './spotify-music.controller';
import AuthSpotifyApi from './services/auth-spotify-api.service';
import SearchSpotifyApi from './services/search-spotify-api.service';

@Module({
  controllers: [SpotifyMusicController],
  providers: [SpotifyMusicService, AuthSpotifyApi, SearchSpotifyApi],
})
export class SpotifyMusicModule {}
